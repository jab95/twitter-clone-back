const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const config = require("config")

const initDatabase = async () => {

    await mongoose.connect(config.get("db"));
    console.log("conexion establecida")
    return;
}

module.exports = {
    initDatabase: initDatabase
}