const userHandler = require("../handlers/userHandler");
const messageHelper = require("../helpers/messageHelper");
const storeUser = async (req, res) => {
	try {
		let newUser = await userHandler.createUser(req.body);
		if (newUser.error) {
			res.status(400).json(newUser);
		} else {
			res.status(201).json(newUser);
		}
	} catch (error) {
		res.status(500).json(messageHelper.error("Server Internal Error",error));
	}
};

const login = async (req, res) => {
	try {
		let newUser = await userHandler.authenticate(req.body);
		if (newUser.error) {
			res.status(400).json(newUser);
		} else {
			res.status(201).json(newUser);
		}
	} catch (error) {
		res.status(500).json("Server Internal Error");
	}
};

module.exports = { storeUser, login };
