const express = require('express');
const router = express.Router();
const session = require('express-session')

router.get('/', async (req, res) => {
    if (req.session.user) {
        const newDelCookie = new Date();
        newDelCookie.setHours(newDelCookie.getHours() - 1);
        res.cookie('lastAccessed', '', { expires: newDelCookie });
        res.clearCookie('lastAccessed');
    
        req.session.destroy();
        return res.status(200).render('login/logout_form')
      
    }
});

module.exports = router