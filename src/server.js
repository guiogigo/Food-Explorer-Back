require('express-async-errors');
const express = require("express");
require('dotenv').config();


const AppError = require("./utils/AppError");
const routes = require("./routes")

const app = express();
app.use(express.json());

app.use(routes)

app.get("/", (req, res) => {
    return res.send("Hello World");
})

app.use((error, request, response, next) => {
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message,
        })
    }

    console.error(error);

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error",
    })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT};`)
})