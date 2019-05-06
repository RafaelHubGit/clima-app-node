const axios = require('axios');

const getClima = async (lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=05c0436c547106fb4d244a33e8159cbb&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}