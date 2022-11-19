let express = require ('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect with bookmodel 

let Book = require('../models/book.js');

module.exports.displayBookList = (req,res,next)=>{
    Book.find((err, Booklist) =>{
        if (err)
        {
            return console.error(err);
        }
        else 
        {
            console.log(Booklist);
            res.render('book/list',{
                title:'Books', 
                Booklist: Booklist
            })
        }
    })
}

module.exports.displayAddPage = (req,res,next)=>{
    res.render('book/add',{title:'Add Book'})
}

module.exports.processAddPage = (req,res,next)=>{
    let newBook = Book ({
        //enter all this data in a form
        "name":req.body.name,
        "author":req.body.author,
        "published":req.body.published,
        "description":req.body.description,
        "price":req.body.price
    });
    //attempt to create a book, checking for errors first
    Book.create(newBook,(err,Book)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/book-list');
        }
    })

}

module.exports.displayEditPage = (req,res,next)=>{
    let id = req.params.id;
    Book.findById(id,(err,bookToEdit)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('book/edit',{title:'Edit Book', book:bookToEdit});
        }
    })}

module.exports.postUpdate = (req,res,next)=>{
    let id=req.params.id;
    let updateBook = Book({
        "_id":id,
        "name":req.body.name,
        "author":req.body.author,
        "published":req.body.published,
        "description":req.body.description,
        "price":req.body.price
    });
    Book.updateOne({_id:id},updateBook,(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/book-list');
        }
    });
}

module.exports.deleteRow = (req,res,next)=>{
    let id = req.params.id;
    Book.deleteOne({_id:id},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/book-list');
        }
    });
}