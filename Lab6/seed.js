const books = require('./data/books'); //importing the movies file
const reviews = require('./data/reviews'); //importing the movies file
const connection = require('./config/mongoConnection.js'); //calling on the connection
//We need to require ObjectId from mongo
let { ObjectId } = require('mongodb');

const main = async () => {
    
    //No1
    try{ 
        new_book1 = await books.create("Batman",{authorFirstName: "first name", authorLastName: "last name"},["PG-18"], "02/24/1998","Action",[]);
        console.log(new_book1)
        console.log('1st Book created')
        new_review = await reviews.create("This book scared me to death!!", "scaredycat", new_book1['_id'], 5, "10/7/2020","This book was creepy!!! It had me at the edge of my seat.  One of Stephan King's best work!");
      
    }
    catch (e){
        console.error(e)
    }
};

main().catch((error) => {
    console.log(error);
});

