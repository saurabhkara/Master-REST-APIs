import express from "express";


const app = express()

//Http request: GET, POST, PUT, PATCH , DELETE

app.get("/", (req, res, next) => {
    res.json({
        message: 'Welcome to Elib'
    })
})

export default app;