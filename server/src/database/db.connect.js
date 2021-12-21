const mysql = require('mysql');
const dbConfig = require('../config/database.config.js')

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
})

connection.connect(error => {
    if(error) throw error;
    console.log('Successfuly connected to the database');
});

module.exports = connection;