const showsRoutes = require('./shows');
const searchRoutes = require('./search');
const mainRoutes = require('./main')


const constructorMethod = (app) => {
  app.use('/search', searchRoutes);
  app.use('/shows', showsRoutes);
  app.use('/',mainRoutes);
  app.use('*', (req, res) => {
    res.status(404).render("posts/error");
  });
};

module.exports = constructorMethod;