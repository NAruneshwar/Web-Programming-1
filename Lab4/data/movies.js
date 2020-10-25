const mongoCollections = require('../config/mongoCollections.js');
let { ObjectId } = require('mongodb');
const movies = mongoCollections.movies;


const create= async (title, plot, rating, runtime, genre, cast, info)=>{

    if (!title|| typeof(title)!='string') {
      throw 'You must provide a title for the movie in string format';
    }
    if(title.trim()=== ""){
      throw 'the given title is empty string please provide a title'
    }
    if (!plot|| typeof(plot)!='string') {
     throw 'You must provide a plot for the movie in string format';
    }
    if(plot.trim()=== ""){
      throw 'the given plot is empty string please provide a plot'
    }

    if (!rating|| typeof(rating)!='string') { 
      throw 'You must provide a rating for the movie in string format';
    }
    if(rating.trim()=== ""){
      throw 'the given rating is empty string please provide a rating'
    }
    if (!runtime|| typeof(runtime)!='string') {
      throw 'You must provide a runtime for the movie in string format';
    }
    if(runtime.trim()=== ""){
      throw 'the given runtime is empty string please provide a runtime'
    }
    if (!genre|| typeof(genre)!='string'){ 
      throw 'You must provide a genre for the movie in string format';
    }
    if(genre.trim()=== ""){
      throw 'the given genre is empty string please provide a genre'
    }
    if (!info || typeof(info)!='object') {
      throw 'You must provide a info for the movie in object type';
    }
    if(!info.director || typeof(info.director)!='string'){
      throw 'The name of director should be provided and should be a string';
    }
    if(info.director.trim()=== ""){
      throw 'the given director is empty string please provide a director'
    }
    if(!info.yearReleased || typeof(info.yearReleased)!='number'){
      throw 'The year released should be number';
    }
    if(info.yearReleased<1930 || info.yearReleased>2025){
      throw 'The year released should be between 1930 and 2025';
    }

    if (!cast || !Array.isArray(cast)){
      throw 'You must provide an array of breeds';
    }
    if (cast.length === 0) throw 'You must provide at least one actor.';
    const moviesCollect = await movies();

    let newMovie = {
        title,
        plot,
        rating,
        runtime,
        genre,
        cast,
        info
    };
    // console.log(newMovie);
    const insertInfo = await moviesCollect.insertOne(newMovie);
    if (insertInfo.insertedCount === 0) throw 'Could not add Movie';

    const newId = insertInfo.insertedId;
    return await get(newId.toString());
  }


const getAll = async() =>{
  const moviesCollect = await movies();

  const allinfo = await moviesCollect.find({}).toArray();
  for(k in allinfo){
    allinfo[k]['_id'] = allinfo[k]['_id'].toString()
  }
  return allinfo
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

  const moviesCollect = await movies();
  const Info = await moviesCollect.findOne({ _id: ObjectId(id)});
  if(Info == null) throw 'No Movies exist with that ID';
  
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
  movietitle = await get(id)
  // console.log(movietitle)
  const moviesCollect = await movies();
    const deletionMovie = await moviesCollect.deleteOne({ _id: ObjectId(id) });
    // console.log(deletionMovie);
    if (deletionMovie.deletedCount === 0) {
      throw `Could not delete Movie with id of ${id}`;
    }
    return (`${movietitle['title']} has been successfully deleted`);

}



const rename = async(id, newTitle) =>{
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
   
  if (!newTitle|| typeof(newTitle)!='string') {
    throw 'You must provide a title for the movie in string format';
  }
  if(newTitle.trim()=== ""){
    throw 'the given title is empty string please provide a title'
  }

    const moviesCollect = await movies();
    const updatedMovies = {
      title: newTitle
    };

    const updatedInfo = await moviesCollect.updateOne(
      { _id: ObjectId(id) },
      { $set: updatedMovies }
    );
    if (updatedInfo.modifiedCount === 0) {
      throw 'could not update Movies successfully Either No ID was provided or its the same name as present ID';
    }

    return await get(id);
  }


module.exports = {
    create,
    getAll,
    get,
    remove,
    rename
};

