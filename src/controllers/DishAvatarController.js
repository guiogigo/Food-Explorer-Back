const DishRepository = require("../repositories/DishRepository");

const DishUploadAvatarService = require("../services/DishUploadAvatarService");


class DishAvatarController {
    async update(req, res) {
        const {id} = req.params;
        const avatarFilename = req.file.filename;
        try {
            const dishRepository = new DishRepository();
            const dishUploadAvatarService = new DishUploadAvatarService(dishRepository);
    
            await dishUploadAvatarService.execute({id, avatarFilename});
            return res.status(201).end();
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }

    }
}

module.exports = DishAvatarController;