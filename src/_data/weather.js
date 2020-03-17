const axios = require("axios");
require("dotenv").config();

module.exports = async function() {
    try {
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=9450,be&APPID=${process.env.API_KEY}&units=metric&lang=nl`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }