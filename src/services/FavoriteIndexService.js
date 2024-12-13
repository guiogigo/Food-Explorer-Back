const AppError = require('../utils/AppError');

class FavoriteIndexService {
    constructor(favoriteRepository, dishRepository) {
        this.favoriteRepository = favoriteRepository;
        this.dishRepository = dishRepository;
    }

    async execute(user_id) {

        if(!user_id) {
            throw new AppError("Informações inválidas")
        }

        const checkFavoriteExistes = (await this.favoriteRepository.indexUserFavs(user_id)).map(dish => dish.dish_id);
        if(!checkFavoriteExistes) throw new AppError("Prato não encontrado");

        const favoritesDishes = await this.dishRepository.findById(checkFavoriteExistes);



        return favoritesDishes;
    }
}

module.exports = FavoriteIndexService;