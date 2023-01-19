const express = require("express");
const router = express.Router();
const userManager = require("../public/javascript/registroManager");
const cors = require("cors")

var corsOptions = {
    origin: 'https://twitter-clone-back-production.up.railway.app',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


router.get("/get", async (req, res) => {

    let usuario = await userManager.getUser(req.query.user, req.query.pass);
    res.status(200).json(usuario)
})


router.options('/add', cors(corsOptions))

router.post("/add", cors(corsOptions), async (req, res, next) => {


    let usuario = await userManager.createUser(req.body.usuario, req.body.pass);
    res.status(200).json(usuario)
})
module.exports = router