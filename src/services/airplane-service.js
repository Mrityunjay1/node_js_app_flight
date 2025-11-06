
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

async function getAirplaneById(id) {
    try {
        const response = await airplaneRepository.get(id);

        return response;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError('Airplane is not present', error.statusCode);
        }
        throw new AppError("Something went wrong in the airplane service: getAirplaneById", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyAirplane(id) {
    try {
        const response = await airplaneRepository.destroy(id);
        return response;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError('Airplane is not present', error.statusCode);
        }
        throw new AppError("Something went wrong in the airplane service: destroyAirplane", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirplane(id, data) {
    try {
        const response = await airplaneRepository.update(data, id);
        return response;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError('Airplane is not present', error.statusCode);
        }
        throw new AppError("Something went wrong in the airplane service: updateAirplane", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplaneById,
    destroyAirplane,
    updateAirplane
}

