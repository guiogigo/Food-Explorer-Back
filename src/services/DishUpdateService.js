const AppError = require('../utils/AppError');

class DishCreateService {
    constructor(dishRepository) {
        this.dishRepository = dishRepository;
    }

    async execute({id, user_id, name, description, avatar, price, category_id}) {
        
        const newData = {}

        const [dish] = await this.dishRepository.findById(id);
        if(!dish) throw new AppError("Prato não encontrado");
        console.log(user_id);
        console.log(dish)
        if(dish.user_id != user_id) throw new AppError("Permissão negada");

        if(name && name != dish.name) {
            const checkDishExistes = await this.dishRepository.findByName(user_id, name);
            if(checkDishExistes) {
                throw new AppError("Já existe um prato com este nome");
            }
            newData.name = name; 
        }

        if(description) {
            newData.description = description;
        }

        if(avatar) {
            newData.avatar = avatar;
        }

        if(price) {
            if(typeof Number(price) !== 'number' ||  isNaN(Number(price))) {
                throw new AppError("Preço inválido");
            }
            newData.price = price;
        }

        if(category_id) {
            newData.category_id = category_id;
        }
        
        try {
            const updated = await this.dishRepository.update(id, newData);
            return updated
        } catch (error) {
            throw new AppError("Ocorreu uma falha ao atualizar.", 500);
        }
    }
}

module.exports = DishCreateService;