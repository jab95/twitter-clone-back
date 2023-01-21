
const express = require('express');
const path = require("path")
const app = express();
const dotenv = require("dotenv");
dotenv.config()
const config = require('config');
const PORT = process.env.PORT || 3000;
const appDatabase = require("./public/javascript/appDatabase");
appDatabase.initDatabase();

console.log(config.get("db"));

(async function () {
    console.log(__dirname)
    app.use("/images", express.static(path.resolve(__dirname, 'images')))
    //el await aqui no se si haria falta
    await require("./public/javascript/appInit")(express, app);

    app.listen(PORT, (error) => {
        if (!error)
            console.log("Server is Successfully Running, and App is listening on port " + PORT)
        else
            console.log("Error occurred, server can't start", error);
    }
    );

    module.exports = app;
})();