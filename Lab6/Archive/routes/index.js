const reviewsRoutes = require('./reviews');
const booksRoutes = require('./books');


const constructorMethod = (app) => {
  app.use('/books', booksRoutes);
  app.use('/reviews', reviewsRoutes);

  app.use('*', (req, res) => {
    res.status(404).json({ error: 'You ended up at wrong URL please try again' });
  });
};

module.exports = constructorMethod;