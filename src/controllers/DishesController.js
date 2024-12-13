const DishRepository = require("../repositories/DishRepository");
const IngredientRepository = require("../repositories/IngredientRepository");
const DishCreateService = require("../services/DishCreateService");
const DishDeleteService = require("../services/DishDeleteService");
const DishUpdateService = require("../services/DishUpdateService");
const DishShowService = require("../services/DishShowService");
const DishIndexService = require("../services/DishIndexService");


class DishesController {
    async create(req, res) {
        const dishRepository = new DishRepository();
        const ingredientRepository = new IngredientRepository();
        const dishCreateService = new DishCreateService(dishRepository);

        const {name, description, avatar, price, category_id, ingredients} = req.body;
        const user_id = req.user.id;

        const newDish = await dishCreateService.execute({user_id, name, description, avatar, price, category_id});

        ingredients.map(async (item) => {
            if(item.trim()){
                await ingredientRepository.create({dish_id: newDish, name: item})
            }
        })

        return res.status(201).json({id: newDish});
    }

    async delete(req, res) {
        const dishRepository = new DishRepository();
        const dishDeleteService = new DishDeleteService(dishRepository);

        const {id} = req.params;
        const user_id = req.user.id;

        await dishDeleteService.execute(id, user_id);

        return res.status(204).send();
    }

    async update(req, res) {
        const dishRepository = new DishRepository();
        const ingredientRepository = new IngredientRepository();
        const dishUpdateService = new DishUpdateService(dishRepository);

        const {name, description, avatar, price, category_id, ingredients} = req.body;
        const user_id = req.user.id;
        const dish_id = req.params.id;

        const updatedDish = await dishUpdateService.execute({id: dish_id, user_id, name, description, avatar, price, category_id});

        const old_ingredients = await ingredientRepository.findByDish(dish_id);
        console.log(old_ingredients);

        old_ingredients.map(async (item) => {
            await ingredientRepository.delete(item.id);
        })

        ingredients.map(async (item) => {
            if(item.trim()) {
                await ingredientRepository.create({dish_id: dish_id, name: item})
            }
        })

        return res.status(200).json();
    }

    async show(req, res) {

        const dishRepository = new DishRepository();
        const ingredientRepository = new IngredientRepository();
        const dishShowService = new DishShowService(dishRepository, ingredientRepository);

        const {id} = req.params;

        const dish = await dishShowService.execute({id});
        return res.status(200).json({dish});
    }

    async index(req, res) {
        const dishRepository = new DishRepository();
        const ingredientRepository = new IngredientRepository();
        const dishIndexService = new DishIndexService(dishRepository, ingredientRepository);

        const { search } = req.query;
        const user_id = req.user.id;

        const querys = (typeof search === 'string' && search === 'undefined') ? null : search;

        const dishes = await dishIndexService.execute({user_id, querys});   

        return res.status(200).json({dishes});
    }
}

module.exports = DishesController;