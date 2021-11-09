const routes = require('./routes');

const configureRoutes = (app) => {
  app.use('/api', routes);
};

module.exports = configureRoutes;
