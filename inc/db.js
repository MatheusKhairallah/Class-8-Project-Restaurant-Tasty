const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'matheus',
    password: 'clear',
    database: 'saboroso',
    multipleStatements: true
});

module.exports = connection;