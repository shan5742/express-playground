require("dotenv").config();
const request = require("postman-request");

const forecast = (searchTerm, callback) => {
  const API = process.env.weatherstackAPI;
  const baseURL = "http://api.weatherstack.com";
  const endpoint = "current";
  const url = `${baseURL}/${endpoint}?access_key=${API}&query=${searchTerm}`;
  request({ url, json: true }, (err, res) => {
    if (err) {
      callback("Unable to connect to the weather surface", undefined);
    } else if (res.body.error) {
      callback("Unable to find location", undefined);
    } else {
      const { temperature: temp, feelslike: feelsLike } = res.body.current;
      callback(
        undefined,
        `It is currently ${temp} degrees, but it feels more like ${feelsLike}`
      );
    }
  });
};

module.exports = forecast;
