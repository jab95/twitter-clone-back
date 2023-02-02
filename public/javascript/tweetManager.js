const Usuario = require("../../models/Usuario").Usuario
const _ = require("lodash");
const Tweet = require("./../../models/Tweet").Tweet;



const createTweet = async (texto, foto, usuario) => {

    let tweet = new Tweet({
        texto: texto,
        foto: foto,
        usuario: usuario
    });

    const file = await tweet.save()
    return file

}
const getTweets = async (page) => {


    const options = {
        page: Number(page),
        limit: Number(4),
        sort: { fecha: -1 }
    }

    return Tweet.paginate({}, options);
}

const getTweetsBeforeDate = async (fechaBefore) => {

    return await Tweet.find({ fecha: { $lt: new Date(fechaBefore).toISOString() } }).limit(4).sort({ fecha: -1 }).exec();
}

const getTweetsAfterDate = async (fechaAfter) => {


    let fechaAfterLocal


    if (fechaAfter == "undefined") {
        fechaAfterLocal = new Date()
    } else {
        fechaAfterLocal = new Date(fechaAfter)

    }

    return await Tweet.find({ fecha: { $gt: fechaAfterLocal.toISOString() } }).limit(4).sort({ fecha: -1 }).exec();

}

const getCountTweets = async () => {

    return await Tweet.count();

}







module.exports = {
    createTweet: createTweet,
    getTweets: getTweets,
    getTweetsBeforeDate: getTweetsBeforeDate,
    getTweetsAfterDate: getTweetsAfterDate,
    getCountTweets: getCountTweets
}

