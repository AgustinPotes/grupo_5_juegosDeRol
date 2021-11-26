const infoLogin = [{
    user: "Agustina",
    password:"3531BB"
}]

const loginController = {
    login: (req, res) => {
        res.render('login', {infouser: infoLogin})
    },
};

module.exports = loginController;