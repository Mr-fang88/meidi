var mysql = require('mysql')

var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    port:'3306',
    password:'123456',
    database:'medi'
})


exports.db = db;