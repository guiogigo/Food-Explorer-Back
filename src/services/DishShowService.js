const AppError = require('../utils/AppError');

class DishShowService {
    constructor(dishRepository, ingredientRepository) {
        this.dishRepository = dishRepository;
        this.ingredientRepository = ingredientRepository;
    }

    async execute({id}) {

        if(isNaN(id)) throw new AppError("Código de prato inválido", 400);

        const dish = await this.dishRepository.findById(id);
        if(!dish) throw new AppError("Prato não encontrado");

        delete dish.user_id;
        delete dish.created_at;
        delete dish.updated_at;

        dish.ingredients = [];
        const ingredientsList = await this.ingredientRepository.findByDish(id);
        ingredientsList.map((item, i) => {
            dish.ingredients[i] = item.name;
        });

        return dish;
    }
}

module.exports = DishShowService;