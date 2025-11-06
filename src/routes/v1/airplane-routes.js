const express = require('express');
const { airplaneController } = require('../../controllers');
const { AirplaneMiddleware } = require('../../middlewares');
const router = express.Router();

router.post('/', AirplaneMiddleware.validateCreateRequest, airplaneController.createAirplane);
router.get('/', airplaneController.getAirplanes);
router.get('/:id', airplaneController.getAirplaneById);
router.delete('/:id', airplaneController.destroyAirplane);
router.patch('/:id', AirplaneMiddleware.validateUpdateRequest, airplaneController.updateAirplane);

module.exports = router;


