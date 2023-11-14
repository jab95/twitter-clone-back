const express = require("express");
const router = express.Router();
const userManager = require("../public/javascript/usuarioManager");
const path = require("path")
const fs = require("fs")

const multer = require("multer")
var storageProfile = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = "images/profiles"
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true })
        }
        cb(null, dir)
    },
    filename: (req, file, cb) => {
        const regex = /\?.*$/;
        const fileName = file.originalname.replace(regex, "")
        cb(null, fileName)
    }
})

var storageHeader = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = "images/headers"
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true })
        }
        cb(null, dir)
    },
    filename: (req, file, cb) => {
        const regex = /\?.*$/;
        const fileName = file.originalname.replace(regex, "")
        cb(null, fileName)
    }
})




const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ["image/png", "image/jpg", "image/jpeg"]
    allowedMimeTypes.includes(file.mimetype) ? cb(null, true) : cb(null, false)
}

const uploadProfiles = multer({ storage: storageProfile, fileFilter: fileFilter })
const uploadHeaders = multer({ storage: storageHeader, fileFilter: fileFilter })

router.get("/get", async (req, res, next) => {

    let usuario = await userManager.getUser(req.query.user, req.query.pass);
    res.status(200).json(usuario)
    next()
})

router.get("/getByName", async (req, res, next) => {

    let usuario = await userManager.getUserByName(req.query.user);

    res.status(200).json(usuario)
    next()


})

router.get("/getFiltersByName", async (req, res, next) => {

    let usuario = await userManager.getFiltersByName(req.query.user);
    res.status(200).json(usuario)
    next()

})

router.post("/add", async (req, res, next) => {

    let usuario = await userManager.createUser(req.body.user, req.body.pass, req.body.fotoPerfil, req.body.fotoCabecera);
    res.status(200).json(usuario)
    next()

})

router.put("/changeUsername", async (req, res, next) => {

    let usuario = await userManager.changeUsername(req.body.oldValue, req.body.newValue);
    res.status(200).json(usuario)
    next()

})

router.put("/changePassword", async (req, res, next) => {

    let usuario = await userManager.changePassword(req.body.user, req.body.newValue);
    res.status(200).json(usuario)
    next()

})



router.put("/changeDescription", async (req, res, next) => {

    let usuario = await userManager.changeDescription(req.body.user, req.body.descripcion);
    res.status(200).json(usuario)
    next()

})

router.put("/changeProfile", async (req, res, next) => {
    let usuario = await userManager.changeProfile(req.body.user, req.body.newProfile.replace("\?.*$"));
    res.status(200).json(usuario)
    next()

})

router.put("/changeHeader", async (req, res, next) => {

    let usuario = await userManager.changeHeader(req.body.user, req.body.newHeader.replace("\?.*$"));
    res.status(200).json(usuario)
    next()

})


router.post("/addImageProfile", uploadProfiles.single("image"), async (req, res, next) => {

    res.status(200).json("Imagen adjuntada")
    next()

})

router.post("/addImageHeader", uploadHeaders.single("image"), async (req, res, next) => {

    res.status(200).json("Imagen adjuntada")
    next()

})

module.exports = router