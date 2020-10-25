const DBConnect = require("./mongoConnection");

const getCollectionFn = (collection) =>{
    let _col = undefined;

    return async() =>{
        if(!_col){
            const db = await DBConnect();
            _col = await db.collection(collection);
        };
        return _col
    };
};

module.exports = {
    books: getCollectionFn('books'),
    reviews: getCollectionFn('reviews'),

};