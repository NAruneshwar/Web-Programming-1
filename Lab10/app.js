const express = require('express');
const app = express();
// const static = express.static(__dirname + '/public');
const configRoutes = require('./routes');
const exphbs = require('express-handlebars');
const session = require('express-session')

app.use(session({
  name: 'AuthCookie',
  secret: 'some secret string!',
  resave: false,
  saveUninitialized: true
}));

app.use(async (req, res, next) =>{
  console.log(new Date().toUTCString()+": "+req.method+" Request");
  console.log(req.orignalURL)
  if(req.session.user){
    console.log("Authenticated User")
  }
  else{
    console.log("Unauthenticated User")
  }
  next();
});

app.get('/', (req,res)=>{
  if(req.session.user){
    return res.redirect('/private');
  }
  else{
    res.status(200).render('login/login_form')
  }
});



app.get('/private', (req,res, next)=>{
  if(!req.session.user){
    res.status(403).render('login/error')
  }
  else{
    next();

  }
  
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', exphbs({ defaultLayout: 'main'  }));
app.set('view engine', 'handlebars');

configRoutes(app);

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log('Your routes will be running on http://localhost:3000');
});