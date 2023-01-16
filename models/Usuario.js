const mongoose = require("mongoose")

let UserSchema = mongoose.Schema({

    user: String,
    pass:String
});

const Usuario = mongoose.model("Usuario",UserSchema); 

module.exports = {Usuario:Usuario}