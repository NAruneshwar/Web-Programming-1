const loginRoute = require('./login');
const logoutRoute = require('./logout');
const privateRoute = require('./private');
const express = require('express');
const app = express();
const session = require('express-session')


// const privateRoute = require('./private');

const constructorMethod = (app) => {
  
    // app.use('/')
    app.use('/login',loginRoute);
    app.use('/logout',logoutRoute)
    app.use('/private', privateRoute) 
    app.use('*', (req, res) => {
      res.redirect('/')
  });
};

module.exports = constructorMethod;