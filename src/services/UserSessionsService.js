const { compare } = require('bcryptjs');
const AppError = require('../utils/AppError');
const authConfig = require("../config/auth");
const { sign } = require("jsonwebtoken");
const { isEmailValid } = require('../utils/EmailVerify');

class UserCreateService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute({email, password}) {

        if(!email || !password) {
            throw new AppError("Preencha todos os campos")
        }

        if(!isEmailValid(email)) throw new AppError("Email inválido");

        const user = await this.userRepository.findByEmail(email);
        if(!user) {
            throw new AppError("Email e/ou senha incorreto");
        };

        const checkPassword = await compare(password, user.password);
        if(!checkPassword) {
            throw new AppError("Email e/ou senha incorreto");
        }

        const { secret, expiresIn } = authConfig.jwt;
        const token = sign({
            role: user.role
        }, secret, {
            subject: String(user.id),
            expiresIn
        })

        return {user, token};
    }
}

module.exports = UserCreateService;