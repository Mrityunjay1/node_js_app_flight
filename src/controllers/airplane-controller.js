const { error } = require('winston');
const { AirplaneService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');



async function createAirplane(req, res) {
    try {
        const response = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        SuccessResponse.message = "Successfully created the airplane";
        SuccessResponse.data = response;
        return res.status(201).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong in the Airplane Controller: create";
        ErrorResponse.error = { explaination: error.message };
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getAirplanes(req, res) {
    try {
        const response = await AirplaneService.getAirplanes();
        SuccessResponse.message = "Successfully fetched the airplanes";
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong in the Airplane Controller: getAirplanes";
        ErrorResponse.error = { explaination: error.message };
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getAirplaneById(req, res) {
    try {
        const response = await AirplaneService.getAirplaneById(req.params.id);
        SuccessResponse.message = "Successfully fetched the airplane";
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong in the Airplane Controller: getAirplaneById";
        ErrorResponse.error = { explaination: error.message };
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function destroyAirplane(req, res) {
    try {
        const response = await AirplaneService.destroyAirplane(req.params.id);
        SuccessResponse.message = "Successfully destroyed the airplane";
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong in the Airplane Controller: destroyAirplane";
        ErrorResponse.error = { explaination: error.message };
        return res.status(error.statusCode).json(ErrorResponse);
    }
}



module.exports = {
    createAirplane,
    getAirplanes,
    getAirplaneById,
    destroyAirplane
}