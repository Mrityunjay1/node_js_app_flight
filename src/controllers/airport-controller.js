const { error } = require('winston');
const { AirportService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');



async function createAirport(req, res) {
    try {
        const response = await AirportService.createAirport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId
        });
        SuccessResponse.message = "Successfully created the airport";
        SuccessResponse.data = response;
        return res.status(201).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong in the Airport Controller: create";
        ErrorResponse.error = { explaination: error.message };
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getAirports(req, res) {
    try {
        const response = await AirportService.getAirports();
        SuccessResponse.message = "Successfully fetched the airports";
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong in the Airport Controller: getAirports";
        ErrorResponse.error = { explaination: error.message };
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getAirportById(req, res) {
    try {
        const response = await AirportService.getAirportById(req.params.id);
        SuccessResponse.message = "Successfully fetched the airport";
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong in the Airport Controller: getAirportById";
        ErrorResponse.error = { explaination: error.message };
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function destroyAirport(req, res) {
    try {
        const response = await AirportService.destroyAirport(req.params.id);
        SuccessResponse.message = "Successfully destroyed the airport";
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong in the Airport Controller: destroyAirport";
        ErrorResponse.error = { explaination: error.message };
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function updateAirport(req, res) {
    try {
        const response = await AirportService.updateAirport(req.params.id, {
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId
        });
        SuccessResponse.message = "Successfully updated the airport";
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong in the Airport Controller: updateAirport";
        ErrorResponse.error = { explaination: error.message };
        return res.status(error.statusCode).json(ErrorResponse);
    }
}




module.exports = {
    createAirport,
    getAirports,
    getAirportById,
    destroyAirport,
    updateAirport
}