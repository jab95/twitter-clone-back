const express = require("express");
const router = express.Router();
const userManager = require("../public/javascript/usuarioManager");
const path = require("path")

const multer = require("multer")
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images/profiles")
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname
        cb(null, fileName)
    }
})


const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ["image/png", "image/jpg", "image/jpeg"]
    allowedMimeTypes.includes(file.mimetype) ? cb(null, true) : cb(null, false)
}

const upload = multer({ storage: storage, fileFilter: fileFilter })

router.get("/get", async (req, res) => {

    let usuario = await userManager.getUser(req.query.user, req.query.pass);
    res.status(200).json(usuario)
})

router.get("/getByName", async (req, res) => {

    let usuario = await userManager.getUserByName(req.query.user);
    res.status(200).json(usuario)
})
router.post("/add", async (req, res, next) => {

    let usuario = await userManager.createUser(req.body.user, req.body.pass);
    res.status(200).json(usuario)
})

router.put("/changeUsername", async (req, res, next) => {

    let usuario = await userManager.changeUsername(req.body.oldValue, req.body.newValue);
    res.status(200).json(usuario)
})

router.put("/changeDescription", async (req, res, next) => {

    let usuario = await userManager.changeDescription(req.body.user, req.body.descripcion);
    res.status(200).json(usuario)
})




router.put("/changeProfile", async (req, res, next) => {

    let usuario = await userManager.changeProfile(req.body.user, req.body.newProfile);
    res.status(200).json(usuario)
})

router.post("/addImageProfile", upload.single("image"), async (req, res, next) => {

    res.status(200).json("Imagen adjuntada")
})




module.exports = router