const express = require('express');
const router = express.Router();
const axios = require('axios');








router.get('/', async (req, res) => {
    try {
        const show = await getTvData();
        res.json(show);
    } catch (e) {
      res.status(500).send(e);
    }
  });


router.get('/:id', async (req, res) => {
  
    try {
        const show = await getTvDataByID(req.params.id);
        res.json(show);
    } catch (e) {
      res.status(404).send(e);
    }
  });





async function getTvData() {
    const { data } =  await axios.get('http://api.tvmaze.com/shows');
    return data;
}

async function getTvDataByID(id) {
    if(Number(id)>0){
        const { data } =  await axios.get('http://api.tvmaze.com/shows/'+id);
        return data;
    }
    else{
        throw {Error: "the given variable is not a positive whole number"}
      }
  
}

module.exports = router;
