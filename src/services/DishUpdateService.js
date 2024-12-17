const AppError = require('../utils/AppError');

class DishCreateService {
    constructor(dishRepository, ingredientRepository) {
        this.dishRepository = dishRepository;
        this.ingredientRepository = ingredientRepository
    }

    async execute({id, user_id, name, description, avatar, price, category_id, ingredients}) {
        
        const newData = {}

        const [dish] = await this.dishRepository.findById(id);
        if(!dish) throw new AppError("Prato não encontrado");
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

            const old_ingredients = await this.ingredientRepository.findByDish(id);

            old_ingredients.map(async (item) => {
                await this.ingredientRepository.delete(item.id);
            })

            ingredients.map(async (item) => {
                if(item.trim()) {
                    await this.ingredientRepository.create({dish_id: id, name: item})
                }
            })

            return updated
        } catch (error) {
            console.log(error)
            throw new AppError("Ocorreu uma falha ao atualizar.", 500);
        }
    }
}

module.exports = DishCreateService;