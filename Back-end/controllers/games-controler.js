const express = require("express");
const router = express.Router();


router.get("/games/:titles",function(req,res){
    res.send("games")
})

module.exports = router;
