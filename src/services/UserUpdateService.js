const AppError = require('../utils/AppError');
const { hash, compare } = require("bcryptjs");
const { isEmailValid } = require('../utils/EmailVerify');

class UserUpdateService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute({id, name, email, old_password, new_password}) {
        const newData = {}

        const user = await this.userRepository.findById(id);
        if(!user) {
            throw new AppError("Usuário não encontrado", 404);
        }

        if(name) newData.name = name;

        if(email) {
            if(!isEmailValid(email)) throw new AppError("Email inválido");
            const userEmail = await this.userRepository.findByEmail(email);
            
            if(userEmail && id != userEmail.id) {
                throw new AppError("Email inválido");
            }
            else newData.email = email;
        }

        if(new_password) {
            if(!old_password) throw new AppError("A senha antiga deve ser informada");

            const isPasswordValid = await compare(old_password, user.password);
            if(!isPasswordValid) throw new AppError("Senha incorreta", 401);

            if(new_password.length < 6){
                throw new AppError("A nova senha deve conter pelo menos 6 caracteres");
            }

            newData.password = await hash(new_password, 8);
        }

        try {
            const updated = await this.userRepository.update(id, newData);
            return updated;
        } catch (error) {
            throw new AppError("Ocorreu uma falha ao atualizar.", 500);
        }

    }
}

module.exports = UserUpdateService;