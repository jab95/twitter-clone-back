const mongoose = require("mongoose")

let UserSchema = mongoose.Schema({

    user: String,
    previousName: String,
    pass: String,
    fotoPerfil: String,
    fotoCabecera: String,
    descripcion: String
});

const Usuario = mongoose.model("Usuario", UserSchema);

module.exports = { Usuario: Usuario }