const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/', async (req, res) => {
    try {
        res.render("posts/homepage");
    } catch (e) {
      res.status(404).render("posts/error");
    }
  });


module.exports = router;
