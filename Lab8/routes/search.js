const express = require('express');
const router = express.Router();
const axios = require('axios');




router.post('/', async (req, res) => {
    try {
        let show = req.body.searchTerm
        
        if(!show || show.trim()==""){
            res.status(400).render("posts/idmisserror");
        }
        let result = {}
        // console.log(show)

        const showDetails = await getTvDataByName(show);
        // console.log(showDetails)
        for(k in showDetails){
            if(k<20){
                result[showDetails[k].show.id] = showDetails[k].show.name
                 
            }
        }
     
        res.render("posts/find", {query : show,
                                showDetails: result});
    } catch (e) {
        res.status(400).render("posts/idmisserror");
    }
});



async function getTvDataByName(show) {
    if(show){
        const { data } =  await axios.get('http://api.tvmaze.com/search/shows?q='+show);
        return data;
    }
    else{
        res.status(400).render("posts/idmisserror");
    }
}

module.exports = router;
