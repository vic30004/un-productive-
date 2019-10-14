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
const {game_name,picture,release_date,genre,platform,user_name}= req.body;
    connection.query(`INSERT INTO games (game_name, background_image, released_date, genre, user_name)
     VALUES ('${game_name}', '${picture}', '${release_date}', '${genre}', '${}','${user_name}');`, function (err, results) {
        if (err) throw err;
        res.json(results);
    });
});





module.exports = router;

