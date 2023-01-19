const express = require("express");
const router = express.Router();
const tweetManager = require("../public/javascript/tweetManager");


router.post("/add", async (req, res, next) => {


    let tweet = await tweetManager.createTweet(req.body.texto, req.body.foto, req.body.usuario);
    res.status(200).json(tweet)
})
router.get("/getTweets", async (req, res, next) => {

    let tweets = await tweetManager.getTweets(req.query.page);
    console.log(tweets)
    res.status(200).json(tweets)
})
module.exports = router