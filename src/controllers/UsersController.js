
const UserRepository = require("../repositories/UserRepository");
const UserCreateService = require("../services/UserCreateService");
const UserUpdateService = require("../services/UserUpdateService");

class UsersController {
    async create(req, res) {
        const {name, email, password} = req.body;
        
        try {
            const userRepository = new UserRepository();
            const userCreateService = new UserCreateService(userRepository);
    
            const userId = await userCreateService.execute({name, email, password});
            
            return res.send({id: userId}).status(201);
            
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }
    }

    async update(req, res) {
        const {name, email, old_password, new_password} = req.body;
        const user_id = req.user.id;

        
        try {
            const userRepository = new UserRepository();
            const userUpdateService = new UserUpdateService(userRepository);
    
            const updated = await userUpdateService.execute({id: user_id, name, email, old_password, new_password});
    
            res.send({updated}).status(200);
            
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }
    }
}

module.exports = UsersController;