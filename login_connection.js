
var mysql = require('mysql');

var login_connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Nav@gur1",
    insecureAuth : true,
    database:"user_data"
});

login_connection.connect(function(err){
    if(err) throw err;
    console.log("connect")
});


module.exports = login_connection