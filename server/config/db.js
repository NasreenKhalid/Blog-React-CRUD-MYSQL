const mysql = require('mysql')

const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database:"blog_posts" 
})

module.exports = db;