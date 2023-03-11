const usuarioRoutes = require("../../routes/usuario")
const tweetRoutes = require("../../routes/tweet")
const cors = require("cors");
const helmet = require("helmet")
const bodyParser = require("body-parser")
const path = require("path")

module.exports = (express, app) => {

    var corsOptions = {
        origin: '*',
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }

    app.use(helmet())
    // todo esto siempre antes que las rutas
    app.use(cors(corsOptions))
    // app.use(cors())
    app.use(bodyParser.json())
    app.use(express.json({ limit: '50mb' }))
    app.use(express.urlencoded({ extended: true }));

    app.use("/usuario", usuarioRoutes)
    app.use("/tweet", tweetRoutes)




}