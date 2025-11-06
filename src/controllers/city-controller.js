
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

module.exports = {
    createCity,
}
