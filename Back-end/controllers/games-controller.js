const express = require("express");
const router = express.Router();
const Rawger = require('rawger');
const connection = require('../config/connection')

router.get('/games/favorites', async function (req, res) {

    connection.query("SELECT * FROM favorites_games", function (err, results) {
        if (err) throw err;
        res.json(results);
    });
});

router.post('/games/favorites', async function (req, res) {

    connection.query(`INSERT INTO favorites_games (game_name, background_image, released_date, rating, user_name)
     VALUES ('${req.body.game_name}', '${req.body.background_image}', '${req.body.released_date}', '${req.body.rating}', '${req.body.user_name}');`, function (err, results) {
        if (err) throw err;
        res.json(results);
    });
});


router.get("/games/:titles", function (req, res) {
    res.send("games")
});

router.get('/games', async function (req, res) {
    const rawger = await Rawger();
    const { games } = rawger;

    const results = (await games.search(req.query.q));
    res.json(results.get());


});



module.exports = router;

