const express = require('express');
const basicRouter = express.Router();
const basicAuth = require('express-basic-auth');

basicRouter.use(basicAuth({ authorizer: basicAuthorizer }));
basicRouter.use('/api/weather', require('../api/weather'));
// router.get('/', (req, res) => {
//     console.log('return main page')
//     res.sendFile('ndex.html');
// });


// app.get('/', (req, res) => {
//     res.sendFile('index.html');
// });
function basicAuthorizer(username, password) {
    return (username === 'Neil' && password === process.env.WEB_SPEECH_AI_API_KEY)
}


// not found catch all
// router.use('/', (req, res) => { res.status(404).end(); });

module.exports = basicRouter;
