const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=acdb8cb5a42cc086ccf69d43ed728430&query=' + latitude + ',' + longitude + '&units=m';

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to Weather service !!', undefined);
        } else if (response.body.error) {
            callback(response.body.error.info, undefined);
        } else {
            callback(undefined, 'The Weather is ' + response.body.current.weather_descriptions[0] + ' throughout the day. It is currently '
                + response.body.current.temperature + ' degrees and feels like ' + response.body.current.feelslike + ' degrees.'
            );
        }
    })
}

module.exports = forecast;