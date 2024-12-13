const AppError = require('../utils/AppError');

class FavoriteCreateService {
    constructor(favoriteRepository, dishRepository) {
        this.favoriteRepository = favoriteRepository;
        this.dishRepository = dishRepository;
    }

    async execute({user_id, dish_id}) {

        if(!user_id || !dish_id) {
            throw new AppError("Informações inválidas")
        }

        if (isNaN(dish_id)) throw new AppError('Informe o ID do prato');

        const checkFavoriteExistes = await this.favoriteRepository.findByUser({user_id, dish_id});
        if(checkFavoriteExistes) throw new AppError("Este prato já foi favoritado");

        const checkDishExistes = await this.dishRepository.findById(dish_id);
        if(!checkDishExistes) throw new AppError("Prato não encontrado");

        const favId = await this.favoriteRepository.create({user_id, dish_id});

        return favId;
    }
}

module.exports = FavoriteCreateService;