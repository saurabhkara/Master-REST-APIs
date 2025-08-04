import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";
import { config } from "../config/config";



const globalErrorHandler = (err: HttpError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode | 400;

    return res.status(statusCode).json({
        message: err.message,
        errStack: config.ENV === 'development' ? err.stack : ''
    })
}

export default globalErrorHandler;