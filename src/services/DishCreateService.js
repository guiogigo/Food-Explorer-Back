const AppError = require('../utils/AppError');

class DishCreateService {
    constructor(dishRepository, ingredientRepository) {
        this.dishRepository = dishRepository;
        this.ingredientRepository = ingredientRepository;
    }

    async execute({user_id, name, description, avatar, price, category_id, ingredients}) {

        if(!user_id || !name || !description || !price || !category_id) {
            throw new AppError("Preencha todos os campos")
        }

        const checkDishExistes = await this.dishRepository.findByName(user_id, name);
        if(checkDishExistes) {
            throw new AppError("Este prato já existe");
        }

        if(typeof Number(price) !== 'number' ||  isNaN(Number(price))) {
            throw new AppError("Preço inválido");
        }

        
        try {
            const dishId = await this.dishRepository.create(user_id, name, description, avatar, price, category_id)
            ingredients.map(async (item) => {
                if(item.trim()){
                    await this.ingredientRepository.create({dish_id: dishId, name: item})
                }
            
        })
        
        return dishId
        } catch (error) {
            throw new AppError("Não foi possível cadastrar o prato");
        }
    }
}

module.exports = DishCreateService;