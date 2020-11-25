const express = require('express');
const router = express.Router();
const axios = require('axios');



router.get('/:id', async (req, res) => {
  
    try {
        const show = await getTvDataByID(req.params.id);
        show.summary = show.summary.replace(/(<([^>]+)>)/gi, "");
        
        res.render("posts/showbyid", {show: show});
    } catch (e) {
        res.status(404).render("posts/showidmissing");
    }
});



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
