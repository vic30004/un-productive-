const express = require("express");
const router = express.Router();
const connection = require ('../config/connection')
router.get('/productive', function (req, res) {

    connection.query("SELECT * FROM books", function (err, results) {
        if (err) throw err;
        console.table(results);
    });
});

router.post('/productive', function (req, res) {

    connection.query(`INSERT INTO books (author_name, book_name, picture, date_published, user_name)
     VALUES ?`,[req.params.author_name, req.params.book_name, req.params.picture, req.params.date_published, req.params.user_name], function (err, results) {
        if (err) throw err;
        console.log(results);
    });
});






module.exports = router;

