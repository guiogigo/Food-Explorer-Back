const { compare } = require('bcryptjs');
const AppError = require('../utils/AppError');

class UserCreateService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute({email, password}) {

        if(!email || !password) {
            throw new AppError("Preencha todos os campos")
        }

        const user = await this.userRepository.findByEmail(email);
        if(!user) {
            throw new AppError("Email ou senha incorreto");
        };

        const checkPassword = await compare(password, user.password);
        if(!checkPassword) {
            throw new AppError("Email ou senha incorreto");
        }

        return user;
    }
}

module.exports = UserCreateService;