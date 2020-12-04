const geoCode = require('./utils/geoCode');
const forecast = require('./utils/forecast');

const location = process.argv[2];
if (location) {
    geoCode(location, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return console.log(error);
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error);
            }
            console.log(location);
            console.log(forecastData);
        })
    })
}
else {
    console.log("Please enter a Location !! ");
}

