const { Router } = require("express");

const FavoritesController = require("../controllers/FavoritesController")
const favoritesController = new FavoritesController();

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const favoritesRoutes = Router();


favoritesRoutes.post("/:id", ensureAuthenticated, favoritesController.create);
favoritesRoutes.delete("/:id", ensureAuthenticated, favoritesController.delete);
favoritesRoutes.get("/", ensureAuthenticated, favoritesController.index);

module.exports = favoritesRoutes;
