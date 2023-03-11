const Usuario = require("../../models/Usuario").Usuario
const _ = require("lodash");
const { Tweet } = require("../../models/Tweet");



let createUser = async (user, pass, fotoPerfil, fotoCabecera) => {

    let usuario = new Usuario({
        user: user,
        pass: pass,
        fotoPerfil: fotoPerfil,
        fotoCabecera: fotoCabecera,

    });

    return await usuario.save()
}

let getUser = (user, pass) => {

    return Usuario.findOne({ "user": user, "pass": pass })

}

let getFiltersByName = (user) => {

    return Usuario.find({ "user": { $regex: user } })

}

let getUserByName = async (user) => {

    console.log(new Date().toLocaleTimeString())
    const user2 = await Usuario.findOne({ "user": user });
    console.log(new Date().toLocaleTimeString())

    return user2;

}

let changeUsername = async (userOld, userNew) => {

    const a = await Usuario.findOne({ "user": userOld }).exec()
    await Tweet.updateMany({ "usuario": userOld }, { "$set": { "usuario": userNew } });
    a.user = userNew
    return await a.save()
}

let changeDescription = async (user, description) => {

    const a = await Usuario.findOne({ "user": user }).exec()
    a.descripcion = description
    return await a.save()
}

let changeProfile = async (user, newProfile) => {

    const a = await Usuario.findOne({ "user": user }).exec()
    a.fotoPerfil = newProfile
    return await a.save()
}

let changeHeader = async (user, newHeader) => {

    const a = await Usuario.findOne({ "user": user }).exec()
    a.fotoCabecera = newHeader
    return await a.save()
}




module.exports = {
    createUser,
    getUser,
    changeUsername,
    getUserByName,
    changeProfile,
    changeDescription,
    getFiltersByName,
    changeHeader
}

