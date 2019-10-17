const express = require("express");
const router = express.Router();
const connection = require('../config/connection')

router.get('/api/unproductive', async function (req, res) {

    connection.query("SELECT * FROM games", function (err, results) {
        if (err) throw err;
        res.json(results);
    });
});

router.post('/api/unproductive', async function (req, res) {
    console.log(req.body)
const {game_name,picture,release_date,genre,platform,user_name}= req.body;
    connection.query(`INSERT INTO games (game_name, picture, release_date, genre, platform, user_name)
     VALUES ('${game_name}', '${picture}', '${release_date}', '${genre}', '${platform}','${user_name}');`, function (err, results) {
        if (err) throw err;
        res.json(results);
    });
});





module.exports = router;

