
const { Router, static } = require("express");
const uploadConfig = require('../config/upload');

const filesRoutes = Router();

filesRoutes.use("/", static(uploadConfig.UPLOADS_FOLDER));

module.exports = filesRoutes;


