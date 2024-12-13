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

        const checkFavoriteExistes = await this.favoriteRepository.findByUser({user_id, dish_id});
        if(!checkFavoriteExistes) throw new AppError("Prato não encontrado");

        const deleted = await this.favoriteRepository.delete({user_id, dish_id});

        return deleted;
    }
}

module.exports = FavoriteCreateService;