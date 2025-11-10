const express = require('express');
const { airportController } = require('../../controllers');
const { AirportMiddleware } = require('../../middlewares');
const router = express.Router();

router.post('/', AirportMiddleware.validateCreateRequest, airportController.createAirport);
router.get('/', airportController.getAirports);
router.get('/:id', airportController.getAirportById);
router.delete('/:id', airportController.destroyAirport);
router.patch('/:id', AirportMiddleware.validateUpdateRequest, airportController.updateAirport);

module.exports = router;


