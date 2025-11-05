
const { StatusCodes } = require('http-status-codes');
const { AirplaneRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
    try {
        const response = await airplaneRepository.create(data);
        return response;
    } catch (error) {
        if (error.name === "SequelizeValidationError") {
            let explaination = [];
            for (let key in error.errors) {
                explaination.push(error.errors[key].message);
            }
            throw new AppError(explaination.join(", "), StatusCodes.BAD_REQUEST);
        }
        throw new AppError("Invalid data passed to create an airplane", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplanes() {
    try {
        const response = await airplaneRepository.getAll();
        return response;
    } catch (error) {
        throw new AppError("Something went wrong in the airplane service: getAirplanes", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirplane,
    getAirplanes
}

