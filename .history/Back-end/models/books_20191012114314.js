const connection = require ('../config/connection')

const books = {
    add: function(){
        connection.query("SELECT * FROM books")
    }
}