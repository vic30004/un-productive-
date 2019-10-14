const connection = require ('../config/connection')

const books = {
    add: function(cb){
        connection.query("SELECT * FROM books", function(err,res){
            if (err){
                throw err;
            }
            else{
                cb(res)
            }
        })
    },

    update: function(cb){
        connection.query("INSTER INTO books")
    }
}