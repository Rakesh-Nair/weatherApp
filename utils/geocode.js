const request = require('postman-request');
const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicmFrZXNobmFpciIsImEiOiJja2k4ZXAyYTYwNTN3MzRuNHU2bDQwMzFuIn0.qywtm1t5SZpeNBSXguwUug&limit=1'
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to Location service !!', undefined);
        }
        else if (response.body.features.length === 0) {
            callback('Unable to fetch the result', undefined);
        }
        else {
            const longitude = response.body.features[0].center[0];
            const latitude = response.body.features[0].center[1];
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geoCode;