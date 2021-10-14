const routes = require('./routes');

const configureRoute = (app) => {
  app.use('/api', routes);
};

module.exports = configureRoute;
