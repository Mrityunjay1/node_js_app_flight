const { StatusCodes } = require('http-status-codes');
const { CityRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');

const cityRepository = new CityRepository();



async function createCity(data) {
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch (error) {
        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            let explaination = []
            error.errors.forEach((err) => {
                explaination.push(err.message);
            });
            throw new AppError(explaination, StatusCodes.BAD_REQUEST);
        }
        throw new AppError([error.message], StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyCity(id) {
    try {
        const response = await cityRepository.destroy(id);
        return response;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError('City is not present', error.statusCode);
        }
        throw new AppError("Something went wrong in the city service: destroyCity", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateCity(id, data) {
    try {
        const response = await cityRepository.update(id, data);
        return response;
    } catch (error) {
        if (error.statusCode === StatusCodes.NOT_FOUND) {
            throw new AppError('City is not present', error.statusCode);
        }
        throw new AppError("Something went wrong in the city service: updateCity", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


module.exports = {
    createCity,
    destroyCity,
    updateCity,
}
