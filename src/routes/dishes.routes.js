const { Router } = require("express");
const multer = require('multer');
const uploadConfig = require('../config/upload');

const DishesController = require("../controllers/DishesController")
const dishesController = new DishesController();

const DishAvatarController = require("../controllers/DishAvatarController")
const dishAvatarController = new DishAvatarController();

const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const dishesRoutes = Router();
const upload = multer(uploadConfig.MULTER)

dishesRoutes.use(ensureAuthenticated);


dishesRoutes.post("/", verifyUserAuthorization("admin"), dishesController.create);
dishesRoutes.delete("/:id", verifyUserAuthorization("admin"), dishesController.delete);
dishesRoutes.put("/:id", verifyUserAuthorization("admin"), dishesController.update);
dishesRoutes.get("/:id", dishesController.show);
dishesRoutes.get("/", dishesController.index);
dishesRoutes.patch("/:id/picture",
    verifyUserAuthorization("admin"),
    upload.single('avatar'),
    dishAvatarController.update
);

module.exports = dishesRoutes;
