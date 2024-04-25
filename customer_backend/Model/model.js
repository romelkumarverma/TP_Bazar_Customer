const mysql = require('mysql')

const con = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'',
    port:'3306',
    database:'e_commerce'
})
con.connect(function(err){
    if(err){
        console.log("Database is not connected...")
    }else {
        console.log("Database is connected successfully...")
    }
})
module.exports = con