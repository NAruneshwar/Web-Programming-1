const express = require('express');
const router = express.Router();



router.get('/', async (req, res) => {
    try {
      const post = {
        "name": "Arun Nalluri",
        "cwid": "10456010",
        "biography": "You can see my name above :) I am a grad assisstant at SERC former TA at SSW 564 \\n The WP assignments take alot of time!",
        "favoriteShows": ["Narcos", "Friends", "Inside Bills Brain", "The Grand Tour"]
    }
    
      res.json(post);
    } catch (e) {
      res.status(404).json({ message: 'Post not found' });
    }
  });

module.exports = router;
