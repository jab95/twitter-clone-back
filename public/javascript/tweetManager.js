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

const deleteTweet = async (id) => {

    return await Tweet.deleteOne({ _id: id }).exec()

}


const getTweets = async (page) => {


    const options = {
        page: Number(page),
        limit: Number(4),
        sort: { fecha: -1 }
    }

    return Tweet.paginate({}, options);
}

const getTweetsByProfile = async (user, page) => {


    const options = {
        page: Number(page),
        limit: Number(4),
        sort: { fecha: -1 },
    }

    return await Tweet.paginate({ usuario: user }, options);
}

const getTweetsBeforeDate = async (fechaBefore) => {

    return await Tweet.find({ fecha: { $lt: fechaBefore } }).limit(4).sort({ fecha: -1 }).exec();
}

const getTweetsBeforeDateByUser = async (fechaBefore, user) => {

    return await Tweet.find({ fecha: { $lt: fechaBefore }, usuario: user }).limit(4).sort({ fecha: -1 }).exec();
}


const getTweetsAfterDateByUser = async (fechaAfter, user) => {


    if (fechaAfter == "undefined") {
        fechaAfter = new Date().toISOString()
    }

    return await Tweet.find({ fecha: { $gt: fechaAfter }, usuario: user }).limit(4).sort({ fecha: -1 }).exec();

}

const getTweetsAfterDate = async (fechaAfter) => {

    if (_.isNil(fechaAfter) || fechaAfter == "undefined") {
        fechaAfter = new Date().toISOString()
    }

    return await Tweet.find({ fecha: { $gt: fechaAfter } }).limit(4).sort({ fecha: -1 }).exec()

}

const getCountTweets = async () => {

    return await Tweet.count();

}







module.exports = {
    createTweet,
    getTweets,
    getTweetsBeforeDate,
    getTweetsAfterDate,
    getCountTweets,
    getTweetsByProfile,
    getTweetsAfterDateByUser,
    getTweetsBeforeDateByUser,
    deleteTweet

}

