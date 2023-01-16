const express = require("express");
const router = express.Router();
const userManager = require("../public/javascript/registroManager");

router.get("/get",async (req,res)=>{

    let usuario = await userManager.getUser(req.query.user,req.query.pass);
    res.status(200).json(usuario)
})


router.post("/add",async (req,res,next)=>{


    let usuario = await userManager.createUser(req.body.usuario,req.body.pass);
    res.status(200).json(usuario)
})
module.exports = router