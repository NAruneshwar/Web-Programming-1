const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
    try{
        res.status(200).render("fibonacci/calculation",{title: "All Right"});
    }
    catch(e){
        res.status(404).send(e);
        // console.error(e);
    }

});

module.exports = router