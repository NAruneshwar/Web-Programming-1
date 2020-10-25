const mongoCollections = require('../config/mongoCollections.js');
let { ObjectId } = require('mongodb');
const books = mongoCollections.books;



const create= async (title, author, genre, datePublished, summary)=>{

    if (!title|| typeof(title)!='string') {
      throw 'You must provide a title for the book in string format';
    }
    if(title.trim()=== ""){
      throw 'the given title is empty string please provide a title'
    }
    if (!author || typeof(author)!='object') {
      throw 'You must provide a author for the book in object type';
    }
    if(!author.authorFirstName || typeof(author.authorFirstName)!='string'){
      throw 'The FirstName of author should be provided and should be a string';
    }
    if(author.authorFirstName.trim()=== ""){
      throw 'the given FirstName is empty string please provide a author firstname';
    }
    if(!author.authorLastName || typeof(author.authorLastName)!='string'){
      throw 'The authorLastName should be provided and should be a string';
    }
    if(author.authorLastName.trim()=== ""){
      throw 'the given authorLastName is empty string please provide a Name'
    }
    let isDateValid = Date.parse(datePublished);
    if(isNaN(isDateValid)){
      throw 'Not a Valid Date'
    }
    if (!genre || !Array.isArray(genre)){
      throw 'You must provide an array of genre';
    }
    if (genre.length === 0) throw 'You must provide at least one genre.';
// Date Published isnt checked!
    if (!summary|| typeof(summary)!='string') {
      throw 'You must provide a runtime for the movie in string format';
    }
    if(summary.trim()=== ""){
      throw 'the given runtime is empty string please provide a runtime'
    }

    let reviews = [];

    const booksCollect = await books();

    let newBook = {
        title,
        author,
        genre,
        datePublished,
        summary,
        reviews,
    };
    // console.log(newMovie);
    const insertInfo = await booksCollect.insertOne(newBook);
    if (insertInfo.insertedCount === 0) throw 'Could not add Book';

    const newId = insertInfo.insertedId;
    return await get(newId.toString());
  }


const getAll = async() =>{
  const booksCollect = await books();
  const Info = await booksCollect.find({}).toArray();
  if(Info == null) throw 'No books exist in the DB';
  let result =[]
  // console.log(Info.length)
  for (let k=0; k<Info.length; k++){
    let inner_val = {}
    for (const [key, value] of Object.entries(Info [k])){
      if(key == '_id'){
        inner_val['_id'] = value.toString();
      }
      if(key == 'title'){
        inner_val['title'] = value;
      }
    }
    // console.log(inner_val);
    result.push(inner_val);
  }
  return result
}



const get = async(id) =>{
  if (!id) 
  {
    throw 'You must provide an id to search for';
  }
  if(typeof(id)!="string" || id.length!=24){
    throw 'You must only pass in id as string that is 24 charecters long'
  }
  if(id.trim()===""){
    throw 'Id can not be empty spaces'
  }
  var re =  /^[0-9a-fA-F]+$/;
  if(!re.test(id)) {
    throw 'Given Input is not in hexadecimal please verify ID'
  } 

  const booksCollect = await books();
  // console.log(id)
  const Info = await booksCollect.findOne({ _id: ObjectId(id)});
  if(Info == null) throw 'No books exist with that ID';
  
  Info['_id']= Info['_id'].toString()
  return Info
}


const remove = async(id) => {
  if (!id) {
    throw 'You must provide an id to search for';
  }
  if(typeof(id)!="string" || id.length!=24){
    throw 'You must only pass in id as string that is 24 charecters long'
  }
  if(id.trim()===""){
    throw 'Id can not be empty spaces'
  }
  var re =  /^[0-9a-fA-F]+$/;
  if(!re.test(id)) {
    throw 'Given Input is not in hexadecimal please verify ID'
  } 
  booktitle = await get(id)
  let reviewcount = booktitle.reviews.length
  // console.log(movietitle)
  const booksCollect = await books();
    const deletionBook = await booksCollect.deleteOne({ _id: ObjectId(id) });
    // console.log(deletionMovie);
    if (deletionBook.deletedCount === 0) {
      throw `Could not delete Movie with id of ${id}`;
    }
  return reviewcount;

}



const update = async(id, title, author, genre, datePublished, summary) =>{
  if (!id){
    throw 'You must provide an id to search for';
  }
  if(typeof(id)!="string" || id.length!=24){
    throw 'You must only pass in id as string that is 24 charecters long'
  }
  if(id.trim()===""){
    throw 'Id can not be empty spaces'
  }
  var re =  /^[0-9a-fA-F]+$/;
  if(!re.test(id)) {
    throw 'Given Input is not in hexadecimal please verify ID'
  } 
   
  if (!title|| typeof(title)!='string') {
    throw 'You must provide a title for the book in string format';
  }
  if(title.trim()=== ""){
    throw 'the given title is empty string please provide a title'
  }
  if (!author || typeof(author)!='object') {
    throw 'You must provide a author for the book in object type';
  }
  if(!author.authorFirstName || typeof(author.authorFirstName)!='string'){
    throw 'The FirstName of author should be provided and should be a string';
  }
  if(author.authorFirstName.trim()=== ""){
    throw 'the given FirstName is empty string please provide a author firstname';
  }
  if(!author.authorLastName || typeof(author.authorLastName)!='string'){
    throw 'The authorLastName should be provided and should be a string';
  }
  if(author.authorLastName.trim()=== ""){
    throw 'the given authorLastName is empty string please provide a Name'
  }
  if (!genre || !Array.isArray(genre)){
    throw 'You must provide an array of genre';
  }
  if (genre.length === 0) throw 'You must provide at least one genre.';
// Date Published isnt checked!
  if (!summary|| typeof(summary)!='string') {
    throw 'You must provide a runtime for the movie in string format';
  }
  if(summary.trim()=== ""){
    throw 'the given runtime is empty string please provide a runtime'
  }

  let isDateValid = Date.parse(datePublished);
  if(isNaN(isDateValid)){
    throw 'Not a Valid Date'
  }
  
  const booksCollect = await books();
    const updatedBooks = {
      title,
      author,
      genre,
      datePublished,
      summary
    };
    // console.log(updatedBooks);
    const updatedData = await booksCollect.updateOne(
      { _id: ObjectId(id) },
      { $set: updatedBooks }
    );

    return await get(id);
    
}

const removeRid = async(bid, rid) =>{
  const booksDetails = await get(bid)
  // console.log(booksDetails);
  let newReviews = booksDetails['reviews'];
    var index = newReviews.indexOf(rid);
    newReviews.splice(index, 1);

    const updatedBooks = {
      reviews: newReviews
    };
    const booksCollect = await books();
    const updatedInfo = await booksCollect.updateOne(
      { _id: ObjectId(bid) },
      { $set: updatedBooks }
    );
    if (updatedInfo.modifiedCount === 0) {
      throw 'could not update Movies successfully Either No ID was provided or its the same name as present ID';
    }
    return;
}


const addReview = async(bid, rid) => {
  // console.log(bid)
  let newReviews = []
  bid = bid.toString();
  rid = rid.toString();
  const booksDetails = await get(bid)
    // console.log(booksDetails)
    newReviews = booksDetails['reviews']
    newReviews.push(rid)
    const updatedBooks = {
      reviews: newReviews
    };
    const booksCollect = await books();
    const updatedInfo = await booksCollect.updateOne(
      { _id: ObjectId(bid) },
      { $set: updatedBooks }
    );
  return;
}





module.exports = {
    create,
    getAll,
    get,
    remove,
    update,
    removeRid,
    addReview
};

