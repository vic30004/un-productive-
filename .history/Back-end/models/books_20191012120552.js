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
        connection.query(`INSERT INTO favorites_books (author_name, book_name, background_image, date_published, user_name)
     VALUES ('${req.body.author_name}', '${req.body.book_name}', '${req.body.Backgroung_image}', '${req.body.date_published}', '${req.body.user_name}');`, function (err, res) {
        if (err) throw err;
        cb(res);
    });
    },

    
}