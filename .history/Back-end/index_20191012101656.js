const express = require('express');
const cors = require('cors');
const app = express();
const Rawger = require('rawger');
const gameRoutes = require("./controllers/games-controller.js");
const bookRoutes = require("./controllers/books-controller.js");
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(gameRoutes);
app.use(bookRoutes);



app.get('/games/:title', async function (req, res) {
    const rawger = await Rawger();
    const { games } = rawger;
    
    const results = (await games.search(req.query.q));
    res.json(results.get());
    
})


app.listen(PORT, () => {
    console.log(`App is listening at PORT ${PORT}`);
})