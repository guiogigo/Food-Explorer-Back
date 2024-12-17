const AppError = require('../utils/AppError');

class DishDeleteService {
    constructor(dishRepository) {
        this.dishRepository = dishRepository;
    }

    async execute(id, user_id) {

        const [checkDishExistes] = await this.dishRepository.findById(id);
        if(!checkDishExistes) throw new AppError("Prato não encontrado");
        if(checkDishExistes.user_id != user_id) throw new AppError("Permissão negada");

        return await this.dishRepository.delete(id);
    }
}

module.exports = DishDeleteService;