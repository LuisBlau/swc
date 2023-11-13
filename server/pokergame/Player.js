class Player {
  constructor(socketId, playerId, playerName, chipsAmount, isBot = false) {
    this.socketId = socketId;
    this.id = playerId;
    this.name = playerName;
    this.chipsAmount = chipsAmount;
    this.isBot = isBot;
  }
}

module.exports = Player;
