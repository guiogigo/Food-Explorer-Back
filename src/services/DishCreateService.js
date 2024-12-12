const AppError = require('../utils/AppError');

class DishCreateService {
    constructor(dishRepository) {
        this.dishRepository = dishRepository;
    }

    async execute({user_id, name, description, avatar, price, category_id}) {

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

        const dishId = await this.dishRepository.create(user_id, name, description, avatar, price, category_id);

        return dishId;
    }
}

module.exports = DishCreateService;