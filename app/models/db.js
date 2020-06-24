const mysql = require("mysql")

const dbConfig = require("../config")

const connection = mysql.createConnection({
    host : dbConfig.HOST,
    user : dbConfig.USER,
    password : dbConfig.PASSWORD,
    database : dbConfig.DB,
})

//open connection
connection.connect(error=>{
    if(error) throw error
    console.log("Connected")
})

module.exports = connection