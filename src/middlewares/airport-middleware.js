const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");



function validateCreateRequest(req, res, next) {
    const { name, code, cityId } = req.body;
    ErrorResponse.message = "Name, code and cityId are required";
    ErrorResponse.error = new AppError(["Name, code and cityId are required"], StatusCodes.BAD_REQUEST);

    if (!name || !code || !cityId) {
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}



function validateUpdateRequest(req, res, next) {
    const { name, code, cityId } = req.body;
    ErrorResponse.message = "Name, code and cityId are required";
    ErrorResponse.error = new AppError(["Name, code and cityId are required"], StatusCodes.BAD_REQUEST);

    if (!name && !code && !cityId) {
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}



module.exports = {
    validateCreateRequest,
    validateUpdateRequest
}