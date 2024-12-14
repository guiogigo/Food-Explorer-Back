const UserRepository = require("../repositories/UserRepository");
const UserSessionsService = require("../services/UserSessionsService");


class SessionsController {
    async create(req, res) {
        const {email, password} = req.body;

        try {
            const userRepository = new UserRepository();
            const userSessionsService = new UserSessionsService(userRepository);
            
            const session = await userSessionsService.execute({email, password});

            return res.json(session)
        } catch (error) {
            return res.status(500).send({ message: error.message });
        }
    }
}

module.exports = SessionsController;