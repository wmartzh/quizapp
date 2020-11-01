const bcrypt = require("bcrypt");
const messageHelper = require("../helpers/messageHelper");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
	try {

		const token = req.headers.authorization;

		if (token) {
			const { error, decoded } =  jwt.verify(
				token,
				process.env.PRIVATE_KEY
            );
            console.log(decoded);
			if (error) {
				res.status(401).json(messageHelper.error("Unauthorized"));
			} else {
				req.decoded = decoded;
				next();
			}
		} else {
			res.status(400).json(messageHelper.error("Token is required"));
		}
	} catch (err) {
		console.log(err);
		res.status(500).json(messageHelper.error("Exception", err));
	}
};

module.exports = { auth };
