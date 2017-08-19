const express = require('express');
const router = express.Router();
const moment = require('moment');
const weatherService = require('../../service/weather');


router.post('/', (req, res) => {
    console.log('api call to get weather')
    // Get the city and date from the request
    // console.log('request body', req.body)
    // let city = req.body.result.parameters['geo-city']; // city is a required param
    // console.log('=city=', city)
    // //
    // // // Get the date for the weather forecast (if present)
    // // let forecastDate = '';
    // if (req.body.result.parameters['date']) {
    //     date = req.body.result.parameters['date'];
    //     console.log('=Date= ' + date);
    // }
    const city = 'Dundee';
    const date = moment().format('dddd MMMM Do YYYY');

    const result = `City = ${city || 'dont know'}, and date = ${date || 'dont know'}`;
    res.json({ 'speech': result, 'displayText': result });

    // const city = 'Dundee';
    // const forecastDate = new Date();
    // weatherService.getWeather(city, forecastDate).then((result) => {
    //     // res.json(result);
    //     // // Return the results of the weather API to API.AI
    //     // res.setHeader('Content-Type', 'application/json');
    //     // res.send(JSON.stringify({ 'speech': output, 'displayText': output }));
    //     res.json({ 'speech': result, 'displayText': result });
    //
    // }).catch(err => {
    //     console.log('ERROR', err);
    //     res.status(500).end(err.message)
    // });
});

module.exports = router;
