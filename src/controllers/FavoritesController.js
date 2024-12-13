const FavoriteRepository = require("../repositories/FavoriteRepository");
const DishRepository = require("../repositories/DishRepository");

const FavoriteCreateService = require("../services/FavoriteCreateService");
const FavoriteDeleteService = require("../services/FavoriteDeleteService");
const FavoriteIndexService = require("../services/FavoriteIndexService");

class FavoritesController {
    async create(req, res) {
        const user_id = req.user.id;
        const {id} = req.params;

        try {
            const favoriteRepository = new FavoriteRepository();
            const dishRepository = new DishRepository();
            const favoriteCreateService = new FavoriteCreateService(favoriteRepository, dishRepository);
    
            const favId = await favoriteCreateService.execute({user_id, dish_id: id});
    
            return res.status(201).json({id: favId});
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }

    }

    async delete(req, res) {
        const user_id = req.user.id;
        const {id} = req.params;
        
        try {
            const favoriteRepository = new FavoriteRepository();
            const favoriteDeleteService = new FavoriteDeleteService(favoriteRepository);

            await favoriteDeleteService.execute({user_id, dish_id: id});
            return res.status(204).end();
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }

    }

    async index(req, res) {
        const user_id = req.user.id;

        try {
            const favoriteRepository = new FavoriteRepository();
            const dishRepository = new DishRepository();
            const favoriteIndexService = new FavoriteIndexService(favoriteRepository, dishRepository);

            const favorites = await favoriteIndexService.execute(user_id);

            return res.status(200).json({favorites});
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }

    }

}

module.exports = FavoritesController;