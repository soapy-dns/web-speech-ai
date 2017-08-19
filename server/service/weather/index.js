'use strict';
const http = require('http');
const moment = require('moment');

function getWeather(city, requestDate) {
    return new Promise((resolve, reject) => {
        // const weather = { weather: 'bad' }
        // resolve(weather);
        const host = 'api.worldweatheronline.com';
        const wwoApiKey = process.env.WEATHER_API_KEY;
        // requestDate = '20-08-2017';
        const requestCity = city || 'Sydney';  // todo request city
        // Create the path for the HTTP request to get the weather
        let path = '/premium/v1/weather.ashx?format=json&num_of_days=1' +
            '&q=' + encodeURIComponent(city) + '&key=' + wwoApiKey + '&date=' + requestDate;
        console.log('API Request: ' + host + path);
        // Make the HTTP request to get the weather
        http.get({host: host, path: path}, (res) => {
            let body = ''; // var to store the response chunks
            res.on('data', (d) => { body += d; }); // store each response chunk
            res.on('end', () => {
                console.log('body returned from service', body)
                // After all the data has been received parse the JSON for desired data
                let response = JSON.parse(body);
                let forecast = response['data']['weather'][0];
                let location = response['data']['request'][0];
                let conditions = response['data']['current_condition'][0];
                let currentConditions = conditions['weatherDesc'][0]['value'];
                const forecastDate = moment(forecast['date']).format('dddd MMMM Do YYYY');
                // Create response
                let output = `Current conditions in the ${location['type']} 
        ${location['query']} are. ${currentConditions} with a projected high of
        ${forecast['maxtempC']}°C and a low of 
        ${forecast['mintempC']}°C on 
        ${forecastDate}.`;
                // Resolve the promise with the output text
                console.log(output);
                resolve(output);
            });
            res.on('error', (error) => {
                reject(error);
            });
        });
    })
}

module.exports = {
    getWeather: getWeather
};
