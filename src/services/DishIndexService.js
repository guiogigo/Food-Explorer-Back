const AppError = require('../utils/AppError');

class DishShowService {
    constructor(dishRepository, ingredientRepository, favoriteRepository) {
        this.dishRepository = dishRepository;
        this.ingredientRepository = ingredientRepository;
        this.favoriteRepository = favoriteRepository;
    }

    async execute(querys, user_id) {

        const query = querys.split(",");

        const favs = (await this.favoriteRepository.indexUserFavs(user_id)).map((dish) => (dish.dish_id));
        
        const dishes = (await this.dishRepository.dishesBySearch(query)).map((dish) => {
            return {
                ...dish,
                ingredients: dish.ingredients ? dish.ingredients.split(",") : [],
                isFav: favs.includes(dish.id) ? true : false
            }
        })

        if(query) {

            const ingredients = (await this.ingredientRepository.ingredientsBySearch(query))
            .filter(ingredient => 
                !dishes.some(dish => dish.id === ingredient.dish_id)
            )
            .map(dish => dish.dish_id);
           

            const dishesByIngredient = (await this.dishRepository.findById(ingredients)).map((dish) => {
                delete dish.user_id;
                console.log(dish.dish_id)
                return {
                    ...dish,
                    ingredients: dish.ingredients ? dish.ingredients.split(",") : [],
                    isFav: favs.includes(dish.id) ? true : false
                }
            }) 

            const result = [...dishes, ...dishesByIngredient]; 
            return result

        }
        
        return dishes;
    }
}

module.exports = DishShowService;