const mysql=require("mysql");

var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection({
        host:"localhost",
        port:8889,
        user:"root",
        password:"root",
        database:"burgers_db"
    });
};
connection.connect(function(err){
    if(err){
        console.log(err);
    } else {
        console.log("connected")
    }
});

module.exports= connection;