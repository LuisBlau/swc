const jwt = require('jsonwebtoken');
const axios = require('axios');
const User = require('../models/User');
const Table = require('../pokergame/Table');
const Player = require('../pokergame/Player');
const {
  FETCH_LOBBY_INFO,
  RECEIVE_LOBBY_INFO,
  PLAYERS_UPDATED,
  JOIN_TABLE,
  TABLE_JOINED,
  TABLES_UPDATED,
  LEAVE_TABLE,
  TABLE_LEFT,
  FOLD,
  CHECK,
  CALL,
  RAISE,
  TABLE_MESSAGE,
  SIT_DOWN,
  REBUY,
  STAND_UP,
  SITTING_OUT,
  SITTING_IN,
  DISCONNECT,
  TABLE_UPDATED,
  TABLE_CREATED,
  WINNER,
} = require('../pokergame/actions');
const config = require('../config');

const tableModel = require('../models/Table');

const tables = {};
async function generateBot(limit) {
  try {
    const response = await axios.get('https://randomuser.me/api/?nat=us,gb');
    const userData = response.data.results[0];

    const bot = {
      socketId: `bot_socketid_${Date.now()}`,
      userId: `bot_userid_${Date.now()}`,
      name: `${userData.name.first} ${userData.name.last}`,
      // Add more fields as needed
      chipsAmount: limit, // Set an initial chip amount for the bot
      isBot: true,
    };

    return bot;
  } catch (error) {
    console.error('Error generating bot:', error.message);
    throw error;
  }
}
const initializeTables = async () => {
  try {
    const tableData = await tableModel.find();
    for(const table of tableData) {
      tables[table.id] = new Table(table.id, table.name, table.limit, table.maxPlayers, table.botCount);

      // Add bots to the table if there are no human players
      if (tables[table.id].players.length === 0) {
        const botCountToAdd = table.botCount || 0; // You can adjust the number of bots as needed

        for (let i = 1; i <= botCountToAdd; i++) {
          const newBot = await generateBot(table.limit)

          players[newBot.socketId] = new Player(newBot.socketId, newBot.userId, newBot.name, newBot.chipsAmount, newBot.isBot);
          tables[table.id].addPlayer(players[newBot.socketId]);
        }
      }
    }
  } catch (error) {
    console.error('initializeTables error = ', error);
  }
};

async function addTable(tableID) {
  const table = await tableModel.findById(tableID);
  console.log("New Table Detected", table);
  tables[tableID] = new Table(table.id, table.name, table.limit, table.maxPlayers, table.botCount);
}

const players = {};
var mainSocket = null;
var socketIO = null;

function getCurrentPlayers() {
  return Object.values(players).map((player) => ({
    socketId: player.socketId,
    id: player.id,
    name: player.name,
    chipsAmount: player.chipsAmount,
  }));
}

function getCurrentTables() {
  return Object.values(tables).map((table) => ({
    id: table.id,
    name: table.name,
    limit: table.limit,
    maxPlayers: table.maxPlayers,
    currentNumberPlayers: table.players.length,
    smallBlind: table.minBet,
    bigBlind: table.minBet * 2,
    botCount: table.botCount || 0
  }));
}

async function updatePlayerBankroll(player, amount) {
  // console.log('updatePlayerBankroll Player', player);
  // console.log('updatePlayerBankroll Amount', amount);
  const user = await User.findById(player.id);
  user.chipsAmount += amount;
  await user.save();

  // console.log('updatePlayerBankroll Players', players);
  if(players.length > 0) {
    players[mainSocket.id].chipsAmount += amount;
    socketIO.to(mainSocket.id).emit(PLAYERS_UPDATED, getCurrentPlayers());
  }
}

function findSeatBySocketId(socketId) {
  let foundSeat = null;
  Object.values(tables).forEach((table) => {
    Object.values(table.seats).forEach((seat) => {
      if (seat && seat.player?.socketId === socketId) {
        foundSeat = seat;
      }
    });
  });
  return foundSeat;
}

function removeFromTables(socketId) {
  for (let i = 0; i < Object.keys(tables).length; i++) {
    tables[Object.keys(tables)[i]].removePlayer(socketId);
  }
}

function broadcastToTable(table, message = null, from = null, ) {
  for (let i = 0; i < table.players.length; i++) {
    if(table.players[i]){
      let socketId = table.players[i].socketId;
      let tableCopy = hideOpponentCards(table, socketId);
      if(socketIO) {
        socketIO.to(socketId).emit(TABLE_UPDATED, {
          table: tableCopy,
          message,
          from,
        });
      }
    }
  }
}

function changeTurnAndBroadcast(table, seatId) {
  if(table.turnInProgress) {
    return;
  }
  table.turnInProgress = true;
  setTimeout(async () => {
    // console.log('--- change turn --- ', seatId)
    await table.changeTurn(seatId);
    console.log('--- next turn = ', table.turn)
    broadcastToTable(table);

    if (table.handOver) {
      await initNewHand(table);
    }
    table.turnInProgress = false;
  }, 1000);
}


function initNewHand(table) {
  if(table.handInProgress) {
    return;
  }
  table.handInProgress = true;
  if (table.activePlayers().length > 1) {
    broadcastToTable(table, 'New hand starting.');
    console.log('---New hand starting.')
  }
  setTimeout(async () => {
    await table.clearWinMessages();
    await table.startHand();
    console.log('---New hand started.')
    broadcastToTable(table, 'New hand started.');
    table.handInProgress = false;
  }, 4000);

  if(table.handleBustedPlayersInProgress) {
    return;
  }
  table.handleBustedPlayersInProgress = true;
  setTimeout(async () => {
    await handleBustedPlayers(table);
    table.handleBustedPlayersInProgress = false;
  }, 10000)
}

async function handleBustedPlayers(table) {
  try {
    for (const seat of Object.keys(table.seats)) {
      const currentPlayer = table.seats[seat];

      if (currentPlayer && currentPlayer.stack <= 0 && currentPlayer.player.isBot && !currentPlayer.isBusted) {
        console.log('--- handle busted player ---');
        const replacementAction = await replaceBustedPlayer(table, currentPlayer);

        if (replacementAction === 'FOLD') {
          // You may handle the fold scenario or perform additional actions as needed

        }
      }
    }
  } catch (err) {
    console.log('Error handling busted players:', err);
  }
}

async function replaceBustedPlayer(table, currentPlayer) {
  currentPlayer.isBusted = true;
  const newBot = await generateBot(table.limit);
  const newSeatId = currentPlayer.id;

  delete players[currentPlayer.player.socketId];

  players[newBot.socketId] = new Player(
    newBot.socketId,
    newBot.userId,
    newBot.name,
    newBot.chipsAmount,
    true
  );

  await table.removePlayer(currentPlayer.player.socketId);
  await table.addPlayer(players[newBot.socketId]);
  await table.sitPlayer(players[newBot.socketId], newSeatId, table.limit);

  Object.defineProperty(table.seats[newSeatId], 'turn', {
    set: function (value) {
      if (value === true && !this._turnHandled) {
        this._turnHandled = true
        handleChange(table, this.id);
      } else {
        this._turnHandled = false
      }
      this._turn = value;
    },
    get: function () {
      return this._turn;
    },
  });

  const message = `${newBot.name} replaced ${currentPlayer.player.name}`;
  console.log(message);
  broadcastToTable(table, message);

  handleBotAction(table, newSeatId, 'FOLD'); // The new bot folds for this round

  return 'FOLD'; // Indicate the action taken
}


function clearForOnePlayer(table) {
  table.clearWinMessages();
  setTimeout(() => {
    table.clearSeatHands();
    table.resetBoardAndPot();
    broadcastToTable(table, 'Waiting for more players');
  }, 1000);
}

function hideOpponentCards(table, socketId) {
  let tableCopy = JSON.parse(JSON.stringify(table));
  let hiddenCard = { suit: 'hidden', rank: 'hidden' };
  let hiddenHand = [hiddenCard, hiddenCard];

  for (let i = 1; i <= tableCopy.maxPlayers; i++) {
    let seat = tableCopy.seats[i];
    if (
      seat &&
      seat.hand &&
      seat.hand.length > 0 &&
      seat.player.socketId !== socketId &&
      !(seat.lastAction === WINNER && tableCopy.wentToShowdown)
    ) {
      seat.hand = hiddenHand;
    }
  }
  return tableCopy;
}

async function simulateBotAction(table, seatId) {
  const currentPlayer = table.seats[seatId].player;
  const currentBet = table.callAmount;
  const currentPot = table.pot;

  

  // Simulate a basic strategy for the bot
  const handStrength = evaluateHand(table.seats[seatId].hand, table.board);

  // Calculate the amount needed to call
  const amountToCall = currentBet - table.seats[seatId].bet;

  // Decide the action based on hand strength, current bet, and stack
  if (handStrength >= 0.5) {
    // Strong hand, raise with 70% probability
    return Math.random() < 0.7 ? 'RAISE' : amountToCall === 0 ? 'CHECK' : 'CALL';
  } else if (handStrength >= 0.3) {
    // Medium hand, check if there's no bet
    return Math.random() < 0.3 ? 'RAISE' : amountToCall === 0 ? 'CHECK' : 'CALL';
  } else if (handStrength < 0.3) {
    // Weak hand, fold with 60% probability, otherwise call
    return Math.random() < 0.5 ? 'FOLD' : amountToCall === 0 ? 'CHECK' : 'CALL';
  } else {
    return 'FOLD';
  }
}

function checkFlush(cards) {
  const suits = {};
  for (const card of cards) {
    suits[card.suit] = (suits[card.suit] || 0) + 1;
  }
  for (const suitCount of Object.values(suits)) {
    if (suitCount >= 5) {
      return true;
    }
  }
  return false;
}

function checkStraight(cards) {
  const sortedCards = cards
    .map(card => card.rank === 'A' ? 1 : (card.rank === 'K' ? 13 : (card.rank === 'Q' ? 12 : (card.rank === 'J' ? 11 : parseInt(card.rank)))))
    .sort((a, b) => a - b);

  for (let i = 0; i < sortedCards.length - 4; i++) {
    if (
      sortedCards[i] === sortedCards[i + 1] - 1 &&
      sortedCards[i] === sortedCards[i + 2] - 2 &&
      sortedCards[i] === sortedCards[i + 3] - 3 &&
      sortedCards[i] === sortedCards[i + 4] - 4
    ) {
      return true;
    }
  }

  // Check special case: A-2-3-4-5 straight
  if (
    sortedCards[0] === 1 &&
    sortedCards[1] === 10 &&
    sortedCards[2] === 11 &&
    sortedCards[3] === 12 &&
    sortedCards[4] === 13
  ) {
    return true;
  }

  return false;
}

function evaluateHand(playerHand, communityCards) {
  // console.log('playerHand = ', playerHand)
  // console.log('communityCards = ', communityCards)
  const allCards = [...playerHand, ...communityCards];

  const counts = {};
  for (const card of allCards) {
    const rank = card.rank;
    counts[rank] = (counts[rank] || 0) + 1;
  }

  const uniqueRanks = Object.keys(counts);

  const pairs = uniqueRanks.filter((rank) => counts[rank] === 2).length;
  const threeOfAKind = uniqueRanks.some((rank) => counts[rank] === 3);
  const fourOfAKind = uniqueRanks.some((rank) => counts[rank] === 4);

  const isFlush = checkFlush(allCards);

  const isStraight = checkStraight(allCards);

  if (isFlush && isStraight) {
    return 1; // Royal Flush
  } else if (fourOfAKind) {
    return 0.9; // Four of a Kind
  } else if (pairs === 1 && threeOfAKind) {
    return 0.8; // Full House
  } else if (isFlush) {
    return 0.7; // Flush
  } else if (isStraight) {
    return 0.6; // Straight
  } else if (threeOfAKind) {
    return 0.5; // Three of a Kind
  } else if (pairs === 2) {
    return 0.4; // Two Pairs
  } else if (pairs === 1) {
    return 0.3; // One Pair
  } else {
    return 0.2; // High Card
  }
}

function handleBotAction(table, seatId, action) {
  console.log('action = ', action)
  switch (action) {
    case 'FOLD':
      const foldResult = table.handleFold(table.seats[seatId].player.socketId);
      if (foldResult) {
        broadcastToTable(table, foldResult.message);
        changeTurnAndBroadcast(table, foldResult.seatId);
      } else {
        changeTurnAndBroadcast(table, seatId);
      }
      break;
    case 'CHECK':
      const checkResult = table.handleCheck(table.seats[seatId].player.socketId);
      if (checkResult) {
        broadcastToTable(table, checkResult.message);
        changeTurnAndBroadcast(table, checkResult.seatId);
      } else {
        console.log('--- failed to check ---')
        const alternativeAction = 'FOLD'; // or 'CHECK', 'RAISE', etc.
        handleBotAction(table, seatId, alternativeAction);
      }
      break;
    case 'CALL':
      const callResult = table.handleCall(table.seats[seatId].player.socketId);
      if (callResult) {
        broadcastToTable(table, callResult.message);
        changeTurnAndBroadcast(table, callResult.seatId);
      } else {
        console.log('--- failed to call ---')
        const alternativeAction = 'FOLD'; // or 'CHECK', 'RAISE', etc.
        handleBotAction(table, seatId, alternativeAction);
      }
      break;
    case 'RAISE':
      const raiseAmount = Math.floor(Math.random() * ((table.seats[seatId].stack || 0) / 2)) + table.minRaise; // Adjust the raise amount as needed
      const raiseResult = table.handleRaise(table.seats[seatId].player.socketId, raiseAmount);
      if (!raiseResult.error) {
        broadcastToTable(table, raiseResult.message);
        changeTurnAndBroadcast(table, raiseResult.seatId);
      } else {
        console.log('--- failed to raise ---', raiseResult.error)
        const alternativeAction = 'FOLD'; // or 'CHECK', 'RAISE', etc.
        handleBotAction(table, seatId, alternativeAction);
      }
      break;
    default:
      // Handle other actions as needed
      changeTurnAndBroadcast(table, seatId);
      break;
  }
}

let timeoutIds = {};

function handleChange(table, seatId) {
  if(!timeoutIds[table.id]) {
    timeoutIds[table.id] = {}
  }
  if(timeoutIds[table.id][seatId]) {
    clearTimeout(timeoutIds[seatId]);
  }
  timeoutIds[table.id][seatId] = setTimeout(async () => {
    console.log('handleChange')
    console.log(`Turn for seat ${seatId} in table ${table.id} changed to true`);
    const currentPlayer = table.seats[seatId].player;

    if (currentPlayer.isBot) {
      // Simulate bot actions
      const action = await simulateBotAction(table, seatId);
      await handleBotAction(table, seatId, action);
    }
    timeoutIds[table.id][seatId] = null;
  }, 5000);
}


/* bot precessing */
initializeTables().then(() => {
  //Get Random Table
  var tableArray = Object.keys(tables);
  if(tableArray.length == 0) return;
  
  for(let tableId of tableArray) {
    const table = tables[tableId]

    // mainSocket && mainSocket.emit(TABLE_JOINED, { tables: getCurrentTables(), tableId });
    mainSocket && mainSocket.broadcast.emit(TABLES_UPDATED, getCurrentTables());

    let seatId = 0
    for(const player of table.players) {
      //Sit Down
      seatId = seatId + 1;
      const amount = table.limit; //get from db table
      table.sitPlayer(player, seatId, amount);
      // console.log('seats = ', table.seats)

      if(mainSocket) {
        let message = `${player.name} sat down in Seat ${seatId}`;
        // updatePlayerBankroll(player, -amount);
        // console.log(message)
        broadcastToTable(table, message);
      }
      if (table.activePlayers().length === 2) {
        initNewHand(table);
      }

      // Create a custom setter for the `turn` property
      Object.defineProperty(table.seats[seatId], 'turn', {
        set: function (value) {
          if (value === true && !this._turnHandled) {
            this._turnHandled = true
            handleChange(table, this.id);
          } else {
            this._turnHandled = false
          }
          this._turn = value;
        },
        get: function () {
          return this._turn;
        },
      });
    }
  }
});

/* end bot precessing */


const init = (socket, io) => {
  mainSocket = socket;
  socketIO = io;
  socket.on(FETCH_LOBBY_INFO, async (token) => {
    console.log('FETCH_LOBBY_INFO')
    let user;

    jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
      if (err) console.log(err);
      else {
        user = decoded.user;
      }
    });

    if (user) {
      const found = Object.values(players).find((player) => {
        return player.id == user.id;
      });

      if (found) {
        delete players[found.socketId];
        Object.values(tables).map((table) => {
          table.removePlayer(found.socketId);
          broadcastToTable(table);
        });
      }

      user = await User.findById(user.id).select('-password');

      players[socket.id] = new Player(
        socket.id,
        user._id,
        user.name,
        user.chipsAmount,
      );
      console.log('init players', players);

      socket.emit(RECEIVE_LOBBY_INFO, {
        tables: getCurrentTables(),
        players: getCurrentPlayers(),
        socketId: socket.id,
      });
      socket.broadcast.emit(PLAYERS_UPDATED, getCurrentPlayers());
    }
  });

  socket.on(JOIN_TABLE, async (tableId) => {
    console.log("JOIN_TABLE", tableId);

    if (!tables[tableId]) {
      console.log("Table not found. Adding new table.");
      await addTable(tableId);
      console.log("New Table Added", tables[tableId]);
    }
    
    const table = tables[tableId];
    const player = players[socket.id];
    table.addPlayer(player);

    socket.emit(TABLE_JOINED, { tables: getCurrentTables(), tableId });
    socket.broadcast.emit(TABLES_UPDATED, getCurrentTables());

    if (
      tables[tableId].players &&
      tables[tableId].players.length > 0 &&
      player
    ) {
      let message = `${player.name} joined the table.`;
      broadcastToTable(table, message);
    }
  });

  socket.on(TABLE_CREATED, async (table) => {
    console.log("TABLE_CREATED", table);
    table.id = table._id

    try {

      if (!tables[table.id]) {
        await createNewTable(table);
      }
    } catch (err) {
      console.log('Error while creating bots for new table : ', err)
    }
  });

  socket.on(LEAVE_TABLE, (tableId) => {
    console.log('LEAVE_TABLE')
    const table = tables[tableId];
    const player = players[socket.id];
    const seat = Object.values(table.seats).find(
      (seat) => seat && seat.player.socketId === socket.id,
    );

    if (seat && player) {
      updatePlayerBankroll(player, seat.stack);
    }

    table.removePlayer(socket.id);

    socket.broadcast.emit(TABLES_UPDATED, getCurrentTables());
    socket.emit(TABLE_LEFT, { tables: getCurrentTables(), tableId });

    if (
      tables[tableId].players &&
      tables[tableId].players.length > 0 &&
      player
    ) {
      let message = `${player.name} left the table.`;
      broadcastToTable(table, message);
    }

    if (table.activePlayers().length === 1) {
      clearForOnePlayer(table);
    }
  });

  socket.on(FOLD, (tableId) => {
    console.log('FOLD')
    let table = tables[tableId];
    let res = table.handleFold(socket.id);
    res && broadcastToTable(table, res.message);
    res && changeTurnAndBroadcast(table, res.seatId);
  });

  socket.on(CHECK, (tableId) => {
    console.log('CHECK')
    let table = tables[tableId];
    let res = table.handleCheck(socket.id);
    if(res) {
      broadcastToTable(table, res.message);
      changeTurnAndBroadcast(table, res.seatId);
    } else {
      broadcastToTable(table, "Unable to raise. Consider as fold.")
      let res = table.handleFold(socket.id);
      res && broadcastToTable(table, res.message);
      res && changeTurnAndBroadcast(table, res.seatId);
    }
  });

  socket.on(CALL, (tableId) => {
    console.log('CALL')
    let table = tables[tableId];
    let res = table.handleCall(socket.id);
    if(res) {
      broadcastToTable(table, res.message);
      changeTurnAndBroadcast(table, res.seatId);
    } else {
      broadcastToTable(table, "Unable to raise. Consider as fold.")
      let res = table.handleFold(socket.id);
      res && broadcastToTable(table, res.message);
      res && changeTurnAndBroadcast(table, res.seatId);
    }
  });

  socket.on(RAISE, ({ tableId, amount }) => {
    console.log('RAISE')
    let table = tables[tableId];
    let res = table.handleRaise(socket.id, amount);
    if(!res.error) {
      broadcastToTable(table, res.message);
      changeTurnAndBroadcast(table, res.seatId);
    } else {
      let res = table.handleRaise(socket.id, table.minRaise);
      res && broadcastToTable(table, res.message);
      res && changeTurnAndBroadcast(table, res.seatId);
    }
  });

  socket.on(TABLE_MESSAGE, ({ message, from, tableId }) => {
    console.log('TABLE_MESSAGE')
    let table = tables[tableId];
    broadcastToTable(table, message, from);
  });

  socket.on(SIT_DOWN, ({ tableId, seatId, amount }) => {
    console.log('SIT_DOWN')
    const table = tables[tableId];
    const player = players[socket.id];

    if (player) {
      table.sitPlayer(player, seatId, amount);
      let message = `${player.name} sat down in Seat ${seatId}`;

      updatePlayerBankroll(player, -amount);

      broadcastToTable(table, message);
      if (table.activePlayers().length === 2) {
        initNewHand(table);
      }
    }
  });

  socket.on(REBUY, ({ tableId, seatId, amount }) => {
    console.log('REBUY')
    const table = tables[tableId];
    const player = players[socket.id];

    table.rebuyPlayer(seatId, amount);
    updatePlayerBankroll(player, -amount);

    broadcastToTable(table);
  });

  socket.on(STAND_UP, (tableId) => {
    console.log('STAND_UP')
    const table = tables[tableId];
    const player = players[socket.id];
    const seat = Object.values(table.seats).find(
      (seat) => seat && seat.player.socketId === socket.id,
    );

    let message = '';
    if (seat) {
      updatePlayerBankroll(player, seat.stack);
      message = `${player.name} left the table`;
    }

    table.standPlayer(socket.id);

    broadcastToTable(table, message);
    if (table.activePlayers().length === 1) {
      clearForOnePlayer(table);
    }
  });

  socket.on(SITTING_OUT, ({ tableId, seatId }) => {
    console.log('SITTING_OUT')
    const table = tables[tableId];
    const seat = table.seats[seatId];
    seat.sittingOut = true;

    broadcastToTable(table);
  });

  socket.on(SITTING_IN, ({ tableId, seatId }) => {
    console.log('SITTING_IN')
    const table = tables[tableId];
    const seat = table.seats[seatId];
    seat.sittingOut = false;

    broadcastToTable(table);
    if (table.handOver && table.activePlayers().length === 2) {
      initNewHand(table);
    }
  });

  socket.on(DISCONNECT, () => {
    console.log('DISCONNECT')
    const seat = findSeatBySocketId(socket.id);
    if (seat) {
      updatePlayerBankroll(seat.player, seat.stack);
    }

    delete players[socket.id];
    removeFromTables(socket.id);

    socket.broadcast.emit(TABLES_UPDATED, getCurrentTables());
    socket.broadcast.emit(PLAYERS_UPDATED, getCurrentPlayers());
  });
};

async function createNewTable(table) {
  console.log('*********************************');
  console.log("Table not found. Adding new table.");
  await addTable(table.id);

  // Add bots to the table if there are no human players
  if (tables[table.id].players.length === 0) {
    const botCountToAdd = table.botCount || 0;

    for (let i = 1; i <= botCountToAdd; i++) {
      const newBot = await generateBot(table.limit);

      players[newBot.socketId] = new Player(newBot.socketId, newBot.userId, newBot.name, newBot.chipsAmount, newBot.isBot);
      tables[table.id].addPlayer(players[newBot.socketId]);
    }
  }

  mainSocket && mainSocket.broadcast.emit(TABLES_UPDATED, getCurrentTables());

  let seatId = 0;
  for (const player of tables[table.id].players) {
    //Sit Down
    seatId = seatId + 1;
    const amount = tables[table.id].limit; //get from db table
    tables[table.id].sitPlayer(player, seatId, amount);

    if (mainSocket) {
      let message = `${player.name} sat down in Seat ${seatId}`;
      // updatePlayerBankroll(player, -amount);
      console.log(message);
      broadcastToTable(tables[table.id], message);
    }
    if (tables[table.id].activePlayers().length === 2) {
      initNewHand(tables[table.id]);
    }

    // Create a custom setter for the `turn` property
    Object.defineProperty(tables[table.id].seats[seatId], 'turn', {
      set: function (value) {
        if (value === true && !this._turnHandled) {
          this._turnHandled = true;
          handleChange(tables[table.id], this.id);
        } else {
          this._turnHandled = false;
        }
        this._turn = value;
      },
      get: function () {
        return this._turn;
      },
    });
  }
  console.log("New Table Added", tables[table.id]);
}

function hasHumanPlayer(table) {
  return table.players.find((player) => !player.isBot) != null
}

async function initTables() {
  console.log('**********************************')
  console.log('**********************************')
  console.log('**********************************')
  for(const table of Object.values(tables)) {
    if(table && table.players.length && !hasHumanPlayer(table)) {
      for(let i = 0; i < table.players.length; i++) {
        if(table.players[i] && table.players[i].isBot) {
          delete players[table.players[i].socketId];
        }
      }
      tables[table.id] = null
      delete tables.players;
      const newTable = {
        id: table.id,
        limit: table.limit,
        name: table.name,
        maxPlayers: table.maxPlayers,
        botCount: table.botCount,
        gameType: table.gameType
      }
      try {
      await createNewTable(newTable)
      } catch(err) {
        console.log('Error while creating new table : ', err)
      }
    }
  }
}

module.exports = { init, initTables };
