const Usuario = require("../../models/Usuario").Usuario
const _ = require("lodash");
const { Tweet } = require("../../models/Tweet");



let createUser = async (user, pass) => {

    let usuario = new Usuario({
        user: user,
        pass: pass,
        fotoPerfil: "profile-default",

    });

    return await usuario.save()
}

let getUser = (user, pass) => {

    return Usuario.findOne({ "user": user, "pass": pass })

}

let getUserByName = (user) => {

    return Usuario.findOne({ "user": user })

}

let changeUsername = async (userOld, userNew) => {

    const a = await Usuario.findOne({ "user": userOld }).exec()
    await Tweet.updateMany({ "usuario": userOld }, { "$set": { "usuario": userNew } });
    a.user = userNew
    return await a.save()
}

let changeProfile = async (user, newProfile) => {

    const a = await Usuario.findOne({ "user": user }).exec()
    a.fotoPerfil = newProfile
    return await a.save()
}




module.exports = {
    createUser,
    getUser,
    changeUsername,
    getUserByName,
    changeProfile
}

