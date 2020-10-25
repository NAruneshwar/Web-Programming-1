const showsRoutes = require('./shows');
const aboutMe = require('./aboutme');


const constructorMethod = (app) => {
  app.use('/aboutme', aboutMe);
  app.use('/shows', showsRoutes);

  app.use('*', (req, res) => {
    res.status(404).json({ error: 'You ended up at wrong URL please try again' });
  });
};

module.exports = constructorMethod;