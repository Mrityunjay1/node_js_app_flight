
const { StatusCodes } = require('http-status-codes');
const { AirportRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');

const airportRepository = new AirportRepository();

async function createAirport(data) {
    try {
        const response = await airportRepository.create(data);
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

async function getAirports() {
    try {
        const response = await airportRepository.getAll();
        return response;
    } catch (error) {
        throw new AppError("Something went wrong in the airport service: getAirports", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirportById(id) {
    try {
        const response = await airportRepository.get(id);

        return response;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError('Airport is not present', error.statusCode);
        }
        throw new AppError("Something went wrong in the airplane service: getAirplaneById", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyAirport(id) {
    try {
        const response = await airportRepository.destroy(id);
        return response;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError('Airport is not present', error.statusCode);
        }
        throw new AppError("Something went wrong in the airport service: destroyAirport", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirport(id, data) {
    try {
        const response = await airportRepository.update(data, id);
        return response;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError('Airport is not present', error.statusCode);
        }
        throw new AppError("Something went wrong in the airport service: updateAirport", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirportById,
    destroyAirport,
    updateAirport
}

