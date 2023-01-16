const Usuario = require("../../models/Usuario").Usuario
const _ = require("lodash")



let createUser = async (user,pass)=>{

    let usuario = new Usuario({
        user: user,
        pass :pass  
    
    });
    
   return await usuario.save()
}

let getUser = (user,pass)=>{

    return Usuario.findOne({"user":user,"pass":pass})

}


module.exports = {
    createUser:createUser,
    getUser:getUser,
}

