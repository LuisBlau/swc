const User = require('../models/User');
const jwt = require('jsonwebtoken');
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
  WINNER,
} = require('../pokergame/actions');
const config = require('../config');

const tableModel = require('../models/Table');

const tables = {};
const initializeTables = async () => {
  try {
    const tableData = await tableModel.find();
    tableData.map((table) => {
      tables[table.id] = new Table(table.id, table.name, table.limit, table.maxPlayers);
    });
    console.log(tables);
  } catch (error) {
    console.error(error);
  }
};

async function addTable(tableID) {
  const table = await tableModel.findById(tableID);
  console.log("New Table Detected", table);
  tables[tableID] = new Table(table.id, table.name, table.limit, table.maxPlayers);
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
  }));
}

async function updatePlayerBankroll(player, amount) {
  console.log('updatePlayerBankroll Player', player);
  console.log('updatePlayerBankroll Amount', amount);
  const user = await User.findById(player.id);
  user.chipsAmount += amount;
  await user.save();

  console.log('updatePlayerBankroll Players', players);
  if(players.length > 0) {
    players[mainSocket.id].chipsAmount += amount;
    socketIO.to(mainSocket.id).emit(PLAYERS_UPDATED, getCurrentPlayers());
  }
}

function findSeatBySocketId(socketId) {
  let foundSeat = null;
  Object.values(tables).forEach((table) => {
    Object.values(table.seats).forEach((seat) => {
      if (seat && seat.player.socketId === socketId) {
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
  console.log(table.players);
  for (let i = 0; i < table.players.length; i++) {
    let socketId = table.players[i].socketId;
    let tableCopy = hideOpponentCards(table, socketId);
    socketIO.to(socketId).emit(TABLE_UPDATED, {
      table: tableCopy,
      message,
      from,
    });
  }
}

function changeTurnAndBroadcast(table, seatId) {
  setTimeout(() => {
    table.changeTurn(seatId);
    broadcastToTable(table);

    if (table.handOver) {
      initNewHand(table);
    }
  }, 1000);
}

function initNewHand(table) {
  if (table.activePlayers().length > 1) {
    broadcastToTable(table, 'New hand starting.');
  }
  setTimeout(() => {
    table.clearWinMessages();
    table.startHand();
    broadcastToTable(table, 'New hand started.');
  }, 4000);
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
      seat.hand.length > 0 &&
      seat.player.socketId !== socketId &&
      !(seat.lastAction === WINNER && tableCopy.wentToShowdown)
    ) {
      seat.hand = hiddenHand;
    }
  }
  return tableCopy;
}


/* bot precessing */
initializeTables().then(() => {
    
  players['expert_socketid_1'] = new Player(
    'expert_socketid_1',
    'expert_userid_1',
    'expert 1',
    300000,
  );
  
  //Get Random Table
  var tableArray = Object.values(tables);
  var randomIndex = Math.floor(Math.random() * tableArray.length);
  var randomTable = tableArray[randomIndex];
  console.log("randomTable", randomTable);
  var tableId = randomTable.id;

  //Join Table
  console.log("Expert: JOIN_TABLE", tableId);
  const table = tables[tableId];
  const player = players['expert_socketid_1'];
  table.addPlayer(player);

  mainSocket && mainSocket.emit(TABLE_JOINED, { tables: getCurrentTables(), tableId });
  mainSocket && mainSocket.broadcast.emit(TABLES_UPDATED, getCurrentTables());

  if (
    mainSocket &&
    tables[tableId].players &&
    tables[tableId].players.length > 0 &&
    player
  ) {
    let message = `${player.name} joined the table.`;
    broadcastToTable(table, message);
  }

  //Sit Down
    const seatId = Math.floor(Math.random() * 3) + 1;
    const amount = table.limit; //get from db table

    if (player) {
      table.sitPlayer(player, seatId, amount);

      if(mainSocket) {
        let message = `${player.name} sat down in Seat ${seatId}`;
        // updatePlayerBankroll(player, -amount);
        broadcastToTable(table, message);
      }
      if (table.activePlayers().length === 2) {
        initNewHand(table);
      }
    }

  // Function to be executed when the turn changes to true
  function handleChange() {
    console.log(`Turn for seat ${seatId} in table ${tableId} changed to true`);

    // Perform any actions you want when the turn changes to true
    //FOLD
    setTimeout(() => {
      let table = tables[tableId];
      let res = table.handleFold('expert_socketid_1');
      res && broadcastToTable(table, res.message);
      res && changeTurnAndBroadcast(table, res.seatId);
    }, 5000);
  }

  // Create a custom setter for the `turn` property
  Object.defineProperty(tables[tableId].seats[seatId], 'turn', {
    set: function (value) {
      if (value === true) {
        handleChange();
      }
      this._turn = value;
    },
    get: function () {
      return this._turn;
    },
  });

});

/* end bot precessing */


const init = (socket, io) => {
  mainSocket = socket;
  socketIO = io;
  socket.on(FETCH_LOBBY_INFO, async (token) => {
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

  socket.on(LEAVE_TABLE, (tableId) => {
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
    let table = tables[tableId];
    let res = table.handleFold(socket.id);
    res && broadcastToTable(table, res.message);
    res && changeTurnAndBroadcast(table, res.seatId);
  });

  socket.on(CHECK, (tableId) => {
    let table = tables[tableId];
    let res = table.handleCheck(socket.id);
    res && broadcastToTable(table, res.message);
    res && changeTurnAndBroadcast(table, res.seatId);
  });

  socket.on(CALL, (tableId) => {
    let table = tables[tableId];
    let res = table.handleCall(socket.id);
    res && broadcastToTable(table, res.message);
    res && changeTurnAndBroadcast(table, res.seatId);
  });

  socket.on(RAISE, ({ tableId, amount }) => {
    let table = tables[tableId];
    let res = table.handleRaise(socket.id, amount);
    res && broadcastToTable(table, res.message);
    res && changeTurnAndBroadcast(table, res.seatId);
  });

  socket.on(TABLE_MESSAGE, ({ message, from, tableId }) => {
    let table = tables[tableId];
    broadcastToTable(table, message, from);
  });

  socket.on(SIT_DOWN, ({ tableId, seatId, amount }) => {
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
    const table = tables[tableId];
    const player = players[socket.id];

    table.rebuyPlayer(seatId, amount);
    updatePlayerBankroll(player, -amount);

    broadcastToTable(table);
  });

  socket.on(STAND_UP, (tableId) => {
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
    const table = tables[tableId];
    const seat = table.seats[seatId];
    seat.sittingOut = true;

    broadcastToTable(table);
  });

  socket.on(SITTING_IN, ({ tableId, seatId }) => {
    const table = tables[tableId];
    const seat = table.seats[seatId];
    seat.sittingOut = false;

    broadcastToTable(table);
    if (table.handOver && table.activePlayers().length === 2) {
      initNewHand(table);
    }
  });

  socket.on(DISCONNECT, () => {
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

module.exports = { init };
