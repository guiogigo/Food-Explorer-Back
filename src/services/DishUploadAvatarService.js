const AppError = require('../utils/AppError');
const DiskStorage = require('../providers/DiskStorage');

class DishCreateService {
    constructor(dishRepository) {
        this.dishRepository = dishRepository;
    }

    async execute({id, avatarFilename}) {
        
        const [dish] = await this.dishRepository.findById(id);
        if(!dish) throw new AppError("Prato não encontrado");

        const diskStorage = new DiskStorage();
        if(dish.avatar) {
            await diskStorage.deleteFile(dish.avatar);
        }

        const filename = await diskStorage.saveFile(avatarFilename);
        dish.avatar = filename;

        try {
            const updated = await this.dishRepository.update(id, {avatar: filename});
            return updated;
        } catch (error) {
            throw new AppError("Ocorreu uma falha ao atualizar.", 500);
        }

    }
}

module.exports = DishCreateService;