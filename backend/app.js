const express = require("express");
const dotenv = require("dotenv");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const key = process.env.API_KEY;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/", (req, res) => {
  const { cityName, unit } = req.body;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=${unit}`;
  axios
    .get(url)
    .then((response) => {
      const data = response.data;
      const specificData = {
        Temp: data.main.temp,
        Temp_min: data.main.temp_min,
        Temp_max: data.main.temp_max,
        Pressure: data.main.pressure,
        Humidity: data.main.humidity,
        Visibility: data.visibility,
        Wind: data.wind.speed,
        Country: data.sys.country,
        Sunrise: data.sys.sunrise,
        Sunset: data.sys.sunset,
        Icon: data.weather[0].icon,
        Main: data.weather[0].main,
      };
      res.send(specificData);
    })
    .catch((error) => {
      res.send(null);
    });
});

app.listen(port, () => {
  console.log(`Server is working on the ${port} `);
});
