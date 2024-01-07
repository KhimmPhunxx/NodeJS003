// connect to database

const mysql = require('mysql2');

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'preycode_g1'
})

module.exports = db; // export module