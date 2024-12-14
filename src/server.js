require('express-async-errors');
require('dotenv').config();

const express = require("express");
const routes = require("./routes")
const AppError = require("./utils/AppError");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

const uploadConfig = require('./config/upload');
//app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))

app.use(routes);
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

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT};`)
})