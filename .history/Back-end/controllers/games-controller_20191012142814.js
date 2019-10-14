const express = require("express");
const router = express.Router();
const Rawger = require('rawger');
const connection = require('../config/connection')

router.get('/unproductive', async function (req, res) {

    connection.query("SELECT * FROM games", function (err, results) {
        if (err) throw err;
        res.json(results);
    });
});

router.post('/unproductive', async function (req, res) {
const 
    connection.query(`INSERT INTO games (game_name, background_image, released_date, genre, user_name)
     VALUES ('${req.body.game_name}', '${req.body.background_image}', '${req.body.released_date}', '${req.body.rating}', '${req.body.user_name}');`, function (err, results) {
        if (err) throw err;
        res.json(results);
    });
});





module.exports = router;

