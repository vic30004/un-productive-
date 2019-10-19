const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'unproductive.cwvoqltf8fpx.us-west-1.rds.amazonaws.com',
  port: 3306,
  user: 'root',
  password: 'password4321',
  database: 'unproductive'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
