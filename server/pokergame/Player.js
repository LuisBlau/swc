class Player {
  constructor(socketId, playerId, playerName, chipsAmount) {
    this.socketId = socketId;
    this.id = playerId;
    this.name = playerName;
    this.chipsAmount = chipsAmount;
  }
}

module.exports = Player;
