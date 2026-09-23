require('dotenv').config();

const apiKey = process.env.API_KEY;
const dbUser = process.env.MONGO_USERNAME;
const dbPassword = process.env.MONGO_PASSWORD;

// console.log(`API key: ${apiKey}`);
// console.log(`Username: ${dbUser}`);
// console.log(`Password: ${dbPassword}`);

const express = require('express');

const config = require("./pkg/config");

const {
    getForCity,
    getFiveDaysForecast
} = require('./handlers/weather');

const api = express();

api.get("/api/v1/weather/:city", getForCity);
api.get("/api/v1/forecast/:lat/:lon", getFiveDaysForecast);

api.listen(config.getSection("weather").port, (err) => {
    err
        ? console.log("Error starting the server!", err)
        : console.log(`Server started at port ${config.getSection("weather").port}`);

});