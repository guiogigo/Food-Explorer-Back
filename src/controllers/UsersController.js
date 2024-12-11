class UsersController {
    async create(req, res) {
        const {name, email, password} = req.body;

        return res.send({name, email, password}).status(201);
    }
}

module.exports = UsersController;