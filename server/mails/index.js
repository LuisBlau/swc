const MainLayout = require('./layout/MainLayout');
const WelcomeMailContent = require('./mails/WelcomeMail');

const WelcomeMail = (username = '{{nickname}}') => ({
  id: 1,
  name: '001 | Registration Welcome',
  subject: 'Welcome to SwC Poker!',
  text: ((username) =>
    `Hi ${username}!\n\nWelcome to SwC Poker and thank you for registering to our service!\n\nPlay now: https://www.vintagepoker.net \n\nEnjoy playing on our platform!\n\nThe SwC Poker Team
    `)(username),
  html: ((username) =>
    `${MainLayout(
      'Welcome to SwC Poker',
      username,
      WelcomeMailContent(),
    )}`)(username),
});

module.exports = {
  WelcomeMail,
};
