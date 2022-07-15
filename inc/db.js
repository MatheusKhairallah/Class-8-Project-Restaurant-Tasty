const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'matheus',
    database: 'saboroso',
    password: 'clear'
});

module.exports = connection;