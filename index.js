
const express = require('express');
const app = express();
const PORT = 3000;
const appDatabase = require("./public/javascript/appDatabase");
const http = require("https")
const fs = require("fs")

appDatabase.initDatabase();


(async function () {

    //el await aqui no se si haria falta
    await require("./public/javascript/appInit")(express, app);


    const options =
    {
        key: fs.readFileSync("./certificados/private.pem", "utf8"),
        cert: fs.readFileSync("./certificados/myCA.pem", "utf8"),
        requestCert: false,
        rejectUnauthorized: false,
        secureOptions: require("constants").SSL_OP_NO_SSLv3 | require("constants").SSL_OP_NO_TLSv1,
        honorCipherOrder: true
    }



    await http.createServer(app, options).listen(PORT, () => {
        console.log("listening ", process.env.PORT)
    })



    module.exports = app;
})();