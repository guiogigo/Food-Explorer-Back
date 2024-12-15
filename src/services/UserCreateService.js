const { hash } = require('bcryptjs');
const AppError = require('../utils/AppError');

class UserCreateService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute({name, email, password}) {

        if(!name || !email || !password) {
            throw new AppError("Preencha todos os campos")
        }

        if(password.length < 6){
            throw new AppError("A senha deve conter pelo menos 6 caracteres");
        }

        const checkUserExists = await this.userRepository.findByEmail(email);
        if(checkUserExists) {
            throw new AppError("Este email já está em uso");
        };

        const hashedPassword = await hash(password, 8);

        return await this.userRepository.create(name, email, hashedPassword);
    }
}

module.exports = UserCreateService;