const express = require('express');
const router = express.Router();
const connection = require('../config/connection');
router.get('/api/productive', function(req, res) {
  connection.query('SELECT * FROM books', function(err, results) {
    if (err) {
      res.status(404);
      throw err;
    } else {
      res.json(results);
      res.status(200).end();
    }
  });
});

router.post('/api/productive', function(req, res) {
  const {
    author_name,
    book_name,
    picture,
    date_published,
    user_name
  } = req.body;
  connection.query(
    `INSERT INTO books (author_name, book_name, picture, date_published, user_name) VALUES ('${author_name}','${book_name}','${picture}','${date_published}','${user_name}') `,
    function(err, results) {
      if (err) throw err;
      res.status(200).end();
    }
  );
});

router.delete('/api/productive/:id',function(req,res) {
  const {
    id,
    author_name,
    book_name,
    picture,
    date_published,
    user_name
  } = req.body;
  connection.query(`DELETE FROM books WHERE id = ${req.id}`, function(err,res){
    if (err) throw err;
    res.status(200).end();
  })
})

module.exports = router;
