import express from "express";
import createHttpError from "http-errors";
import globalErrorHandler from "./middleware/globalErrorHandler";


const app = express()

//Http request: GET, POST, PUT, PATCH , DELETE

app.get("/", (req, res, next) => {
    const err = createHttpError(400, "Something went wrong")
    throw err;
    res.json({
        message: 'Welcome to Elib'
    })
})


// Global Middleware

app.use(globalErrorHandler)


export default app;