const express = require('express');
const router = express.Router();
const users = require('../data/users')
const bcrypt = require('bcryptjs')
const session = require('express-session')



router.post('/', async (req, res) => {
    try{
        // console.log("Allright man");
        let username = req.body.username;
        let password = req.body.password;
        // console.log(username)
        // console.log(password)
        // console.log(users.length)
        for(let k= 0; k<users.length; k++){
            // console.log(k)
            if(users[k]['username']== username &&  await bcrypt.compare(password, users[k]['hashedPassword'])){
                // console.log("GOOD God");
                req.session.user = {"username": username};
                res.redirect('/private');
            }
        }
        // res.status(200).render("private/dashboard",{users});
        res.status(401).render("login/error");
    }
    catch(e){
        // res.status(200).send(e);
        // console.error(e);
    }

});



module.exports = router