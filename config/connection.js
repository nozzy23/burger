const mysql=require("mysql");
​
const connection=mysql.createConnection({
    host:"localhost",
    port:8889,
    user:"root",
    password:"root",
    database:"burgers_db"
});
​
connection.connect(function(err){
    if(err) {
        console.log(err);
    } else {
        console.log("Connected to MySQL successfully!");
    }
});

module.exports = connection;