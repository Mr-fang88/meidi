var mysql = require('mysql')

var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    port:'0415',
    password:'0415',
    database:'meidi'
})


exports.db = db;