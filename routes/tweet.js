const express = require("express");
const router = express.Router();
const tweetManager = require("../public/javascript/tweetManager");
const _ = require("lodash")

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

router.delete("/remove/:id", async (req, res, next) => {

    let tweet = await tweetManager.deleteTweet(req.params.id);
    res.status(200).json(tweet)
})

router.post("/addImageTweet", upload.single("image"), async (req, res, next) => {

    res.status(200).json("Imagen adjuntada")
})
router.get("/getTweets", async (req, res, next) => {

    let tweets = await tweetManager.getTweets(req.query.page);

    res.status(200).json(tweets)
})

router.get("/getTweetsByProfile", async (req, res, next) => {

    let tweets = await tweetManager.getTweetsByProfile(req.query.user, req.query.page);

    res.status(200).json(tweets)
})

router.get("/getTweetsBeforeDate", async (req, res, next) => {


    let tweets = await tweetManager.getTweetsBeforeDate(req.query.fecha);
    res.status(200).json(tweets)
})

router.get("/getTweetsAfterDate", async (req, res, next) => {


    let tweets = await tweetManager.getTweetsAfterDate(req.query.fecha);
    res.status(200).json(tweets)
})

router.get("/getTweetsBeforeDateByUser", async (req, res, next) => {


    let tweets = await tweetManager.getTweetsBeforeDateByUser(req.query.fecha, req.query.user);
    res.status(200).json(tweets)
})

router.get("/getTweetsAfterDateByUser", async (req, res, next) => {


    let tweets = await tweetManager.getTweetsAfterDateByUser(req.query.fecha, req.query.user);
    res.status(200).json(tweets)
})

router.get("/getCountTweets", async (req, res, next) => {


    let tweets = await tweetManager.getCountTweets();
    res.status(200).json(tweets)
})





module.exports = router