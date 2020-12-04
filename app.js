const geoCode = require('./utils/geoCode');
const forecast = require('./utils/forecast');

geoCode('Mumbai', (error, data) => {
    console.log('error : ' + error);
    console.log('data : ' + JSON.stringify(data));
})

forecast(34.052, -118.243, (error, data) => {
    console.log('error : ' + error);
    console.log('data : ' + JSON.stringify(data));
})