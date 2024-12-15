const AppError = require('../utils/AppError');

class DishShowService {
    constructor(dishRepository, ingredientRepository, favoriteRepository) {
        this.dishRepository = dishRepository;
        this.ingredientRepository = ingredientRepository;
        this.favoriteRepository = favoriteRepository;
    }

    async execute({id, user_id}) {

        if(isNaN(id)) throw new AppError("Código de prato inválido", 400);

        const dishString = await this.dishRepository.findById(id);

        if(dishString.length === 0) throw new AppError("Prato não encontrado");
        const [dish] = dishString.map((dish) => ({
            ...dish,
            ingredients: dish.ingredients ? dish.ingredients.split(",") : []
        }))
        delete dish.user_id;

        const favorite = await this.favoriteRepository.findByUser({dish_id: id, user_id})
        if(favorite) {
            dish.isFav = true;
        }

        return dish;
    }
}

module.exports = DishShowService;