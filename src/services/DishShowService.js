const AppError = require('../utils/AppError');

class DishShowService {
    constructor(dishRepository, ingredientRepository) {
        this.dishRepository = dishRepository;
        this.ingredientRepository = ingredientRepository;
    }

    async execute({id}) {

        if(isNaN(id)) throw new AppError("Código de prato inválido", 400);

        const dishString = await this.dishRepository.findById(id);
        if(!dishString) throw new AppError("Prato não encontrado");
        const dish = dishString.map((dish) => ({
            ...dish,
            ingredients: dish.ingredients ? dish.ingredients.split(",") : []
        }))

        return dish;
    }
}

module.exports = DishShowService;