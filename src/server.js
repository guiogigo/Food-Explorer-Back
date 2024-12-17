require('express-async-errors');
require('dotenv').config();

const cors = require('cors');
const express = require("express");
const routes = require("./routes")
const AppError = require("./utils/AppError");

const PORT = process.env.PORT || 3333;

const app = express();
app.use(cors());
app.use(express.json());



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