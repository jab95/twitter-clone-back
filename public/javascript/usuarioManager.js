const Usuario = require("../../models/Usuario").Usuario
const _ = require("lodash");
const { Tweet } = require("../../models/Tweet");



const createUser = async (user, pass, fotoPerfil, fotoCabecera) => {

    let usuario = new Usuario({
        user: user,
        previousName: user,
        pass: pass,
        fotoPerfil: fotoPerfil,
        fotoCabecera: fotoCabecera,

    });

    console.log(usuario)
    return await usuario.save()
}

const getUser = (user, pass) => {

    return Usuario.findOne({ "user": user, "pass": pass })

}

const getFiltersByName = (user) => {

    return Usuario.find({ "user": { $regex: user } })

}

const getUserByName = async (user) => {

    let userFound = await Usuario.findOne({ "user": user })
    if (_.isEmpty(userFound) || _.isNil(userFound)) {
        userFound = await Usuario.findOne({ "previousName": user })
    }

    return userFound;

}

const changeUsername = async (userOld, userNew) => {

    const a = await Usuario.findOne({ "user": userOld }).exec()
    await Tweet.updateMany({ "usuario": userOld }, { "$set": { "usuario": userNew } });
    a.user = userNew
    a.previousName = userOld
    return await a.save()
}

const changePassword = async (user, newPass) => {

    const a = await Usuario.findOne({ "user": user }).exec()
    a.pass = newPass
    return await a.save()
}

const changeDescription = async (user, description) => {

    const a = await Usuario.findOne({ "user": user }).exec()
    a.descripcion = description
    return await a.save()
}

const changeProfile = async (user, newProfile) => {

    const a = await Usuario.findOne({ "user": user }).exec()
    a.fotoPerfil = newProfile
    return await a.save()
}

const changeHeader = async (user, newHeader) => {

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
    changeHeader,
    changePassword
}

