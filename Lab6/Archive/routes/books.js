const express = require('express');
const router = express.Router();
const data = require('../data');
const bData = data.books;
const rData = data.reviews; 

router.get('/', async (req, res) => {
  try {
    const show = await bData.getAll();
    res.status(200).json(show);
  } catch (e) {
    res.status(404).send({error: "Unable to fetcg"});
  }
});

router.post('/', async(req,res) => {
  let bookPostData = req.body;

    if(!bookPostData.title || !bookPostData.author || !bookPostData.genre || !bookPostData.datePublished || !bookPostData.summary) 
      res.status(400).json({Error: "Wrong format"});
   
  // if(!bookPostData.reviews) throw 'You havent passed reviews of the book';
  try{
    const {title, author, genre, datePublished, summary} = bookPostData
    const newPost = await bData.create(title,author,genre,datePublished,summary);
    res.status(200).json(newPost)
  }
  catch(e){
    res.status(400).json({error:e})
  }
});

router.get('/:id', async (req, res) => {
    try {
        const show = await bData.get(req.params.id);
        res.status(200).json(show);
    } catch (e) {
      res.status(404).send(e);
    }
  });




router.put('/:id', async(req,res) => {
  const bookPostData = req.body;
  if(!bookPostData.title || !bookPostData.author || !bookPostData.genre || !bookPostData.datePublished || !bookPostData.summary || bookPostData.genre.length==0) 
    res.status(400).json({Error: "Wrong format"});
  try{
    await bData.get(req.params.id);
  }
  catch(e){
    res.status(404).json({error: 'Post not found'});
    return;
  }
  try{
    const {title, author, genre, datePublished, summary} = bookPostData
    const updatedBook = await bData.update(req.params.id, title, author, genre, datePublished, summary);
    // console.log(updatedBook);
    res.status(200).json(updatedBook);
  }catch(e){
    res.status(404).json({error:e});
  }
});


router.patch('/:id', async (req, res) => {
  let changes = 0
  const requestBody = req.body;
  try {
    var oldPost = await bData.get(req.params.id);
    var updatedObject = oldPost;
    } catch (e) {
      res.status(404).json({ error: 'Post not found' });
    return;}
    try{
    if (requestBody.title && requestBody.title !== oldPost.title){
      updatedObject.title = requestBody.title;
      changes++;}
    if(requestBody.author){
        if (requestBody.author.authorFirstName && requestBody.author.authorFirstName !== oldPost.author.authorFirstName){
          updatedObject.author.authorFirstName = requestBody.author.authorFirstName;
          changes++;
        }
        if (requestBody.author.authorLastName && requestBody.author.authorLastName !== oldPost.author.authorLastName){
          updatedObject.author.authorLastName = requestBody.author.authorLastName;
          changes++;
        }
    }
    if (requestBody.genre){
      updatedObject.genre = updatedObject.genre.concat(requestBody.genre);
      changes++;
      let uniqueChars = [];
      updatedObject.genre.forEach((c) => {
        if (!uniqueChars.includes(c)) {
            uniqueChars.push(c);
        }
    });
    if(updatedObject.genre == uniqueChars){
      changes--;
    }else{
      updatedObject.genre = uniqueChars
    }
    }
    if (requestBody.datePublished && requestBody.datePublished !== oldPost.datePublished){
      updatedObject.datePublished = requestBody.datePublished;
      changes++;}
      if (requestBody.summary && requestBody.summary !== oldPost.summary){
      updatedObject.summary = requestBody.summary;    
      changes++;
      }
  } catch (e) {
    res.status(400).json({ error: 'Post not found' });
    return;
  }
  if (changes !== 0) {
    const {title, author, genre, datePublished, summary} = updatedObject
  try {
    const updatedPost = await bData.update(
      req.params.id,
      title, 
      author, 
      genre, 
      datePublished, 
      summary
    );
    res.status(200).json(updatedPost);
  } catch (e) {
    res.status(400).json({ error: "No changes in given data" });
    // console.error(e)

  }
} else {
  res
    .status(400)
    .json({
      error:
        'No fields have been changed from their inital values, so no update has occurred'
    });
}
});



router.delete('/:id', async (req, res) => {
  if (!req.params.id) {
    res.status(404).json({ error: 'You must Supply and ID to delete' });
    return;
  }
  try {
    await bData.get(req.params.id);
  } catch (e) {
    res.status(404).json({ error: 'Post not found' });
    return;
  }
  try {
    let reviewCount = await bData.remove(req.params.id);
    if(reviewCount){
      await rData.removeAllBReviews(req.params.id);
    }
    res.status(200).json({"bookId": req.params.id, "deleted": true});
  } catch (e) {
    res.status(404).json({ error: "Lets see why" });
  }
});



module.exports = router;
