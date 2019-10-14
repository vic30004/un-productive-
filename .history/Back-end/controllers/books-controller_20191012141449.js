const express = require("express");
const router = express.Router();
const connection = require ('../config/connection')
const morgan = require('morgan');
router.get('/productive', function (req, res) {

    connection.query("SELECT * FROM books", function (err, results) {
        if (err) throw err;
        console.table(results);
    });
});

router.post('/productive', function (req, res) {
console.log(req.body.author_name);
console.log(req.body.book_name);
console.log(req.body.picture);
console.log(req.body.date_published);
console.log(req.body.user_name);
const {author_name,book_name,picture,date_published,user_name} = req.body
    connection.query('INSERT INTO books (author_name, book_name, picture, date_published, user_name) VALUES  ,[req.body.author_name, req.body.book_name, req.body.picture, req.body.date_published, req.body.user_name], function (err, results) {
        if (err) throw err;
        console.log(results);
    });
});






module.exports = router;

