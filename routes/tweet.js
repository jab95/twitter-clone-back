const express = require("express");
const router = express.Router();
const tweetManager = require("../public/javascript/tweetManager");

const multer = require("multer")
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
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

router.post("/add", async (req, res, next) => {

    let tweet = await tweetManager.createTweet(req.body.texto, req.body.foto, req.body.usuario);
    res.status(200).json(tweet)
})
router.post("/addImageTweet", upload.single("image"), async (req, res, next) => {

    res.status(200).json("Imagen adjuntada")
})
router.get("/getTweets", async (req, res, next) => {

    let tweets = await tweetManager.getTweets(req.query.page);
    res.status(200).json(tweets)
})



module.exports = router