const express = require('express');
const router = express.Router();
const users = require('../data/users')
const session = require('express-session')


router.get('/', async(req,res)=>{
  if(req.session.user){
    username = req.session.user.username;
    // console.log(username)
    for(let k= 0; k<users.length; k++){
      // console.log(users[k])
      if(users[k]['username']== username){
        return res.status(200).render("private/dashboard",{"user":users[k]});
      }
  }
  
    return res.redirect('/')
  
}});




module.exports = router;
