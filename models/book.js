let mongoose = require('mongoose');

//create model
let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number
},
{
    collection: "Learning"
}
);

module.exports = mongoose.model('Book', bookModel);