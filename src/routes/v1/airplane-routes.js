const express = require('express');
const { airplaneController } = require('../../controllers');
const { AirplaneMiddleware } = require('../../middlewares');
const router = express.Router();

router.post('/', AirplaneMiddleware.validateCreateRequest, airplaneController.createAirplane);
router.get('/', airplaneController.getAirplanes);

module.exports = router;


