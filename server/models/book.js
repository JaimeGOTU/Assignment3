let mongoose = require('mongoose');

//create model
let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: String,
},
{
    collection: "VideoCopy"
    //the actual name of the database
}
);

module.exports = mongoose.model('Book', bookModel);