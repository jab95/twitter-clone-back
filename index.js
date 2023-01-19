
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const appDatabase = require("./public/javascript/appDatabase");

appDatabase.initDatabase();


(async function () {

    //el await aqui no se si haria falta
    await require("./public/javascript/appInit")(express, app);


    app.listen(PORT, (error) => {
        if (!error)
            console.log("Server is Successfully Running,                    and App is listening on port " + PORT)
        else
            console.log("Error occurred, server can't start", error);
    }
    );

    module.exports = app;
})();