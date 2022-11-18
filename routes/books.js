let express = require ('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect with bookmodel 

let Book = require('../models/book.js');

//read op.
//get route for book-list

router.get('/',(req,res,next)=>{
    Book.find((err, booklist) =>{
        if (err)
        {
            return console.error(err);
        }
        else 
        {
            console.log(booklist);
            res.render('book',{
                title:'Book List', 
                Booklist: booklist
            })
        }
    })
})
module.exports = router;