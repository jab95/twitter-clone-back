
const express = require('express');
const app = express();
const PORT = 3000;
const appDatabase = require("./public/javascript/appDatabase");
const http = require("https")
appDatabase.initDatabase();


(async function () {

    //el await aqui no se si haria falta
    await require("./public/javascript/appInit")(express, app);



    await http.createServer(app).listen(PORT, () => {
        console.log("listening ", process.env.PORT)
    })



    module.exports = app;
})();