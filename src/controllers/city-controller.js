
const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');
const { CityService } = require('../services');


async function createCity(req, res) {
    try {
        const city = await CityService.createCity({
            name: req.body.name,
        });
        SuccessResponse.message = "Successfully created the city";
        SuccessResponse.data = city;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong in the City Controller: create";
        ErrorResponse.error = { explaination: error.message };
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function destroyCity(req, res) {
    try {
        const city = await CityService.destroyCity(req.params.id);
        SuccessResponse.message = "Successfully destroyed the city";
        SuccessResponse.data = city;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong in the City Controller: destroy";
        ErrorResponse.error = { explaination: error.message };
        return res.status(error.statusCode).json(ErrorResponse);
    }
}
async function updateCity(req, res) {
    try {
        const city = await CityService.updateCity(req.params.id, req.body);
        SuccessResponse.message = "Successfully updated the city";
        SuccessResponse.data = city;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.message = "Something went wrong in the City Controller: update";
        ErrorResponse.error = { explaination: error.message };
        return res.status(error.statusCode).json(ErrorResponse);
    }
}


module.exports = {
    createCity,
    destroyCity,
    updateCity,
}
