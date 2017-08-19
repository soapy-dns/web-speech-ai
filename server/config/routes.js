const express = require('express');
const router = express.Router();
// const passport = require('passport');
// const passportStrategy = require('../helpers/jwtStrategy');

// passport.use(passportStrategy.strategy());

// router.use(passport.initialize());
// router.use('/', (req, res) => console.log('req', req) );

router.use('/api/weather', require('../api/weather'));




// not found catch all
// router.use('/', (req, res) => { res.status(404).end(); });

module.exports = router;
