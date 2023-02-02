const mongoosePaginate = require("mongoose-paginate-v2")
const mongoose = require("mongoose")

let TweetSchema = mongoose.Schema({

    texto: String,
    foto: String,
    usuario: {
        type: Object,
    },
    fecha: {
        type: Date,
        default: Date.now
    }
});
TweetSchema.plugin(mongoosePaginate)

const Tweet = mongoose.model("Tweet", TweetSchema);

module.exports = { Tweet: Tweet }
