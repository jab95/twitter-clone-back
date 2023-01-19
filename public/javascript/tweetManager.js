const Usuario = require("../../models/Usuario").Usuario
const _ = require("lodash");
const Tweet = require("./../../models/Tweet").Tweet;



const createTweet = async (texto, foto, usuario) => {

    let tweet = new Tweet({
        texto: texto,
        foto: foto,
        usuario: usuario
    });

    return await tweet.save()
}
const getTweets = async (page) => {


    const options = {
        page: Number(page),
        limit: Number(4),
    }

    return Tweet.paginate({}, options);
}




module.exports = {
    createTweet: createTweet,
    getTweets: getTweets,
}

