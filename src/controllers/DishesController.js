const DishRepository = require("../repositories/DishRepository");
const IngredientRepository = require("../repositories/IngredientRepository");
const FavoriteRepository = require("../repositories/FavoriteRepository");

const DishCreateService = require("../services/DishCreateService");
const DishDeleteService = require("../services/DishDeleteService");
const DishUpdateService = require("../services/DishUpdateService");
const DishShowService = require("../services/DishShowService");
const DishIndexService = require("../services/DishIndexService");


class DishesController {
    async create(req, res) {
        const {name, description, avatar, price, category_id, ingredients} = req.body;
        const user_id = req.user.id;
        
        try {
            const dishRepository = new DishRepository();
            const ingredientRepository = new IngredientRepository();
            const dishCreateService = new DishCreateService(dishRepository, ingredientRepository);
    
    
            const newDish = await dishCreateService.execute({user_id, name, description, avatar, price, category_id, ingredients});
    
            return res.status(201).send({id: newDish});
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }
    }

    async delete(req, res) {
        const {id} = req.params;
        const user_id = req.user.id;
        
        try {
            const dishRepository = new DishRepository();
            const dishDeleteService = new DishDeleteService(dishRepository);
    
    
            await dishDeleteService.execute(id, user_id);
    
            return res.status(204).send();
            
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }
    }

    async update(req, res) {
        const {name, description, avatar, price, category_id, ingredients} = req.body;
        const user_id = req.user.id;
        const dish_id = req.params.id;

        
        try {
            const dishRepository = new DishRepository();
            const ingredientRepository = new IngredientRepository();
            const dishUpdateService = new DishUpdateService(dishRepository, ingredientRepository);
    
    
            await dishUpdateService.execute({id: dish_id, user_id, name, description, avatar, price, category_id, ingredients});
    
            return res.status(200).json();
            
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }
    }

    async show(req, res) {

        const user_id = req.user.id;
        const {id} = req.params;
        
        try {
            const dishRepository = new DishRepository();
            const ingredientRepository = new IngredientRepository();
            const favoriteRepository = new FavoriteRepository();
            const dishShowService = new DishShowService(dishRepository, ingredientRepository, favoriteRepository);
    
    
            const dish = await dishShowService.execute({id, user_id});
            
            return res.status(200).json(dish);
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }
    }

    async index(req, res) {
        const user_id = req.user.id;
        const { search } = req.query;
        const querys = (typeof search === 'string' && search === 'undefined') ? null : search;
        
        try {
            const dishRepository = new DishRepository();
            const ingredientRepository = new IngredientRepository();
            const favoriteRepository = new FavoriteRepository();
            const dishIndexService = new DishIndexService(dishRepository, ingredientRepository, favoriteRepository);

            const dishes = await dishIndexService.execute(querys, user_id);   
    
            return res.status(200).json({dishes});
            
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }
    }
}

module.exports = DishesController;