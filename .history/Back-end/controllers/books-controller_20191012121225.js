const express = require("express");
const router = express.Router();
const books = require("../models/books")
router.get('/productive', function (req, res) {
    books.all
    
});

router.post('/books/favorites', async function (req, res) {

    connection.query(`INSERT INTO favorites_books (author_name, book_name, background_image, date_published, user_name)
     VALUES ('${req.body.author_name}', '${req.body.book_name}', '${req.body.Backgroung_image}', '${req.body.date_published}', '${req.body.user_name}');`, function (err, results) {
        if (err) throw err;
        res.json(results);
    });
});






module.exports = router;

