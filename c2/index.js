const express = require("express");

const config = require("./pkg/config");
const {
    sendPasswordResetMail,
    sendWelcomeMail
} = require("./handlers/mailer");

const api = express();
api.use(express.json());

api.post("/api/v1/welcome-mail", sendWelcomeMail);
api.post("/api/v1/reset-pass-mail", sendPasswordResetMail);

api.listen(config.getSection("development").port, (err) => {
    err
        ? console.log("Error starting the server!", err)
        : console.log(`Server started at port ${config.getSection("development").port}`);

});