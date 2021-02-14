const mainRoutes = require('./main')


const constructorMethod = (app) => {
  app.use('/',mainRoutes);
  app.use('*', (req, res) => {
    res.status(404).render("posts/error");
  });
};

module.exports = constructorMethod;