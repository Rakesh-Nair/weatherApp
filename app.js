const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=acdb8cb5a42cc086ccf69d43ed728430&query=34.052,-118.243&units=m';

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to Weather service !');
    }
    else if (response.body.error) {
        console.log(response.body.error.info);
    }
    else {
        const parsedBody = response.body.current;
        console.log('It is currently ' + parsedBody.temperature + ' degrees but it feels like ' + parsedBody.feelslike + ' degrees');

    }
})

const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmFrZXNobmFpciIsImEiOiJja2k4ZXAyYTYwNTN3MzRuNHU2bDQwMzFuIn0.qywtm1t5SZpeNBSXguwUug&limit=1'

request({ url: geoUrl, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to Location service !');
    } else if (response.body.features.length === 0) {
        console.log('Unable to fetch the result');
    }
    else {
        const longitude = response.body.features[0].center[0];
        const latitude = response.body.features[0].center[1];
        console.log('latitude ' + latitude);
        console.log('longitude ' + longitude);
    }
})