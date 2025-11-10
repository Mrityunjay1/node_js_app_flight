const express = require("express");
const { infoController } = require('../../controllers')
const airplaneRoutes = require('./airplane-routes');
const router = express.Router();
const cityRoutes = require('./city-routes');
const airportRoutes = require('./airport-routes');


router.get('/info', infoController.info)
router.use('/airplanes', airplaneRoutes);
router.use('/cities', cityRoutes);
router.use('/airports', airportRoutes);



module.exports = router;