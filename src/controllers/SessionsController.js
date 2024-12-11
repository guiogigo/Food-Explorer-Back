const UserRepository = require("../repositories/UserRepository");
const UserSessionsService = require("../services/UserSessionsService");
const authConfig = require("../config/auth");
const { sign } = require("jsonwebtoken");

class SessionsController {
    async create(req, res) {
        const {email, password} = req.body;

        const userRepository = new UserRepository();
        const userSessionsService = new UserSessionsService(userRepository);

        const user = await userSessionsService.execute({email, password});

        const { secret, expiresIn } = authConfig.jwt;
        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn
        })

        return res.json({user, token})
    }
}

module.exports = SessionsController;