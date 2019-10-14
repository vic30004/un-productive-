const connection = require ('../config/connection')

const books = {
    add: function(){
        connection.query("SELECT * FROM books", function(err,res){
            if (err){
                throw err;
            }
            else
        })
    }
}