const formRoute = require('./form');

const constructorMethod = (app) => {

    app.use('/',formRoute);
    app.use('*', (req, res) => {
      res.status(200).response("Really");
  });
};

module.exports = constructorMethod;