const { Router } = require("express");

const DishesController = require("../controllers/DishesController")
const dishesController = new DishesController();

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const dishesRoutes = Router();


dishesRoutes.post("/",ensureAuthenticated, dishesController.create);
dishesRoutes.delete("/:id",ensureAuthenticated, dishesController.delete);
dishesRoutes.put("/:id",ensureAuthenticated, dishesController.update);
dishesRoutes.get("/:id",ensureAuthenticated, dishesController.show);
dishesRoutes.get("/",ensureAuthenticated, dishesController.index);

module.exports = dishesRoutes;
