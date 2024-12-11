
const UserRepository = require("../repositories/UserRepository");
const UserCreateService = require("../services/UserCreateService");
const UserUpdateService = require("../services/UserUpdateService");

class UsersController {
    async create(req, res) {
        
        const userRepository = new UserRepository();
        const userCreateService = new UserCreateService(userRepository);

        const {name, email, password} = req.body;
        const userId = await userCreateService.execute({name, email, password});
        
        return res.send({id: userId}).status(201);
    }

    async update(req, res) {
        const {name, email, old_password, new_password} = req.body;
        const {id} = req.params;

        const userRepository = new UserRepository();
        const userUpdateService = new UserUpdateService(userRepository);

        const updated = await userUpdateService.execute({id, name, email, old_password, new_password});

        res.send({updated}).status(200);
    }
}

module.exports = UsersController;