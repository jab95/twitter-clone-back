
const express = require('express');
const path = require("path")
const app = express();
const config = require('./config/config');
const appDatabase = require("./public/javascript/appDatabase");
appDatabase.initDatabase();

(async function () {
    app.use("/images", express.static(path.resolve(__dirname, 'images')))
    app.use('/js', express.static(__dirname + '/js'));
    app.use('/dist', express.static(__dirname + '/../dist'));
    app.use('/css', express.static(__dirname + '/css'));
    app.use('/partials', express.static(__dirname + '/partials'));

    app.all('/*', function (req, res, next) {
        // Just send the index.html for other files to support HTML5Mode
        res.sendFile('index.html', { root: "/" });
    });

    //el await aqui no se si haria falta
    await require("./public/javascript/appInit")(express, app);

    app.listen(config.PORT, (error) => {
        if (!error)
            console.log("Server is Successfully Running, and App is listening on port " + config.PORT)
        else
            console.log("Error occurred, server can't start", error);
    }
    );

    module.exports = app;
})();