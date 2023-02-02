const mongoose = require("mongoose")
const config = require("../../config/config")

const initDatabase = async () => {

    await mongoose.connect(config.DB_HOST);
    console.log("conexion establecida")
    return;
}

module.exports = {
    initDatabase: initDatabase
}