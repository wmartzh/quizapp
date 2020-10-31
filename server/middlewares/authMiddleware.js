const bcrypt = require("bcrypt");
const messageHelper = require("../helpers/messageHelper");
const jwt = require("jsonwebtoken");


const auth = async (req, res, next) => {
	const token = req.headers["Authentication"];
	if (token) {
		const { error, decoded } = await jwt.verify(token, process.env.PRIVATE_KEY);
		if (error) {
			res.status(401).json(messageHelper.error("Unauthorized"));
		} else {
			req.decoded = decoded;
			next();
		}
	} else {
		res.status(400).json(messageHelper.error("Token is required"));
	}
};


module.exports = { auth };
