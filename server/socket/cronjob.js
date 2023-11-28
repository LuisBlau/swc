const cron = require("node-cron")
const gameSocket = require('.');

const runCrons = () => {
  cron.schedule(
    "0 */2 * * *", // Every 2 hours
    async () => {
      try {
        await gameSocket.initTables()
      } catch (error) {
        console.error("Error while running cronjob : ", error)
      }
    },
    { runOnInit: true }
  )
}

module.exports = { runCrons }