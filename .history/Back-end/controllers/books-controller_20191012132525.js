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
     VALUES ?`,[req.bodys.author_name, req.bodys.book_name, req.bodys.picture, req.bodys.date_published, req.bodys.user_name], function (err, results) {
        if (err) throw err;
        console.log(results);
    });
});






module.exports = router;

