const usuarioRoutes = require("../../routes/usuario")
const tweetRoutes = require("../../routes/tweet")
const cors = require("cors");
const helmet = require("helmet")

module.exports = (express, app) => {

    const corsOption = {
        origin: true,
        methods: ["GET", "PUT", "POST", "DELETE"],
        allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "content-type", "authorization"],
        credentials: true,
        maxAge: 600
    }

    app.use(helmet())
    // todo esto siempre antes que las rutas
    app.use(cors())

    app.options('*', cors())

    // app.use(cors())

    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    app.use("/usuario", usuarioRoutes)
    app.use("/tweet", tweetRoutes)




}