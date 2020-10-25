const express = require('express');
const router = express.Router();
const data = require('../data');
const bData = data.books;
const rData = data.reviews; 



router.get('/:id', async (req, res) => {
  try {
      const show = await rData.getAll(req.params.id); //book id
      if(show.length === 0){
        res.status(404).json("No Reviews for this ID.");}
      else{
        res.status(200).json(show);
      }
  } catch (e) {
    res.status(404).json("No Reviews for this ID.");
  }
});



router.post('/:id', async(req,res) => {
  // let bookid = req.params.id;
  try{
    await bData.get(req.params.id);
  }
  catch(e){
    res.status(400).json({
      error: 'book can not be found!!!!!'
    });
    return;
  }
  const reviewPostData = req.body;
  if(!reviewPostData.title || !reviewPostData.reviewer || !reviewPostData.bookBeingReviewed || !reviewPostData.rating || !reviewPostData.dateOfReview ||!reviewPostData.review) 
    res.status(400).json({Error: "Wrong format"});

  if(req.params.id != reviewPostData.bookBeingReviewed){
    res.status(400).json({Error: "different Id's format"});
  }

  try{
      const {title, reviewer, bookBeingReviewed, rating, dateOfReview, review} = reviewPostData
      const newPost = await rData.create(title,reviewer, bookBeingReviewed, rating, dateOfReview, review);
      // await bData.addReview(bookBeingReviewed,newPost._id.toString());
      res.status(200).json(newPost)
  }
  catch(e){
    res.status(400).json({error:e})
  }
});


router.get('/:bid/:rid', async (req, res) => {
  try{
    reviewData = await rData.get(req.params.bid,req.params.rid)
    // res.status(200).json(reviewData);
      res.status(200).json(reviewData)
  }
  catch(e){
    res.status(404).json({
      error: 'book can not be found!!!!!'
    });
    return;
  }

  try {
    const postList = await rData.getReviewWithId(req.params.rid);
    res.status(200).json(postList);
  } catch (e) {
    res.status(404).send(e);
  }
});


router.delete('/:bid/:rid', async (req, res) => {
  try {
    await rData.remove(req.params.bid,req.params.rid);
    res.status(200).json({"reviewId": req.params.rid, "deleted": true}
    );
  } catch (e) {
    res.status(404).send(e);
  }
});


module.exports = router;
