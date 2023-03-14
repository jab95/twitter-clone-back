const usuarioRoutes = require("../../routes/usuario")
const tweetRoutes = require("../../routes/tweet")
const cors = require("cors");
const helmet = require("helmet")



module.exports = (express, app) => {

    app.use(
        helmet({
            crossOriginEmbedderPolicy: false,
            crossOriginResourcePolicy: false,
            contentSecurityPolicy: false,
        })
    );
    // todo esto siempre antes que las rutas
    // app.use(cors(corsOptions))
    app.use(cors())
    app.use(express.json({ limit: '50mb' }))
    app.use(express.urlencoded({ extended: true }));


    app.use("/usuario", usuarioRoutes)
    app.use("/tweet", tweetRoutes)




}