const AppError = require('../utils/AppError');

class DishShowService {
    constructor(dishRepository, ingredientRepository) {
        this.dishRepository = dishRepository;
        this.ingredientRepository = ingredientRepository;
    }

    async execute(querys) {

        const query = querys.split(",");
        
        const dishes = (await this.dishRepository.dishesBySearch(query)).map((dish) => ({
            ...dish,
            ingredients: dish.ingredients ? dish.ingredients.split(",") : []
        }))

        if(query) {

            const ingredients = (await this.ingredientRepository.ingredientsBySearch(query))
            .filter(ingredient => 
                !dishes.some(dish => dish.id === ingredient.dish_id)
            )
            .map(dish => dish.dish_id);
           

            const dishesByIngredient = (await this.dishRepository.findById(ingredients)).map((dish) => ({
                ...dish,
                ingredients: dish.ingredients ? dish.ingredients.split(",") : []
            })) 

            return [...dishes, ...dishesByIngredient];
        }



        return dishes;
    }
}

module.exports = DishShowService;