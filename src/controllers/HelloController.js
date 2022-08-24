class HelloController {
    async index(req, res) {
        return res.json({ hello: 'tudo certo?'});
    }
}

export default new HelloController();