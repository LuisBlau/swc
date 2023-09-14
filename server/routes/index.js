const configureRoutes = (app) => {
  app.use('/api/auth', require('./api/auth'));
  app.use('/api/users', require('./api/users'));
  app.use('/api/tables', require('./api/tables'));
  app.use('/api/transactions', require('./api/transactions'));
  app.use('/api/mails', require('./api/mails'));
  app.use('/api/chips', require('./api/chips'));
  app.use('/', (req, res) => {
    res.status(200).send('Welcome to SwC Poker!');
  });
};

module.exports = configureRoutes;
