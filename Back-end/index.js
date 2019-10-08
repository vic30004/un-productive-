const express = require('express');
const cors = require('cors');
const app = express()

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());




app.listen(PORT, () => {
    console.log(`App is listening at PORT ${PORT}`);
})