const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");



function validateCreateRequest(req, res, next) {
    const { modelNumber, capacity } = req.body;
    ErrorResponse.message = "Model number and capacity are required";
    ErrorResponse.error = new AppError(["Model number and capacity are required"], StatusCodes.BAD_REQUEST);

    if (!modelNumber || !capacity) {
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}



function validateUpdateRequest(req, res, next) {
    const { modelNumber, capacity } = req.body;
    ErrorResponse.message = "Model number and capacity are required";
    ErrorResponse.error = new AppError(["Model number and capacity are required"], StatusCodes.BAD_REQUEST);

    if (!modelNumber && !capacity) {
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}



module.exports = {
    validateCreateRequest,
    validateUpdateRequest
}