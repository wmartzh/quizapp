const messageHelper = require("../helpers/messageHelper");
const {
	userValidator,
	loginValidator,
} = require("../validators/userValidator");
const { User } = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createUser = async (data) => {
	try {
		const { error, value } = userValidator.validate(data);
		if (error) {
			return messageHelper.error("Invalid data", error.details);
		} else {
			let existUser = await User.getByEmail(value.email);
			console.log(existUser);
			if (existUser.length > 0) {
				return messageHelper.error("Mail Error", "Email already exists");
			} else {
				let hash = bcrypt.hashSync(value.password, 10);
				let newUser = await User.create({
					name: value.name,
					username: value.username,
					email: value.email,
					password: hash,
				});
				if (newUser) {
					return messageHelper.succesWithData(
						"User added successfully",
						value.username + " was created",
						{
							username: newUser.username,
							email: newUser.email,
						}
					);
				} else {
					return messageHelper.error(
						"Save data Error",
						"User could not be added"
					);
				}
			}
		}
	} catch (error) {
		console.error(error);
		return messageHelper.error("Exception", error);
	}
};

const authenticate = async (params) => {
	try {
		const { error, value } = await loginValidator.validate(params);

		if (error) {
			return messageHelper.error(error);
		} else {
			let user = await User.getByEmail(value.email);

			if (user.length > 0) {
				if (checkPassword(value.password, value.password)) {
					const payload = {
						check: true,
						name: user.name,
						email: user.email,
					};

					const tk = jwt.sign(payload, process.env.PRIVATE_KEY, {
						algorithm: "HS256",
						expiresIn: process.env.TOKEN_EXPIRES,
					});
					const remember_tk = jwt.sign(payload, process.env.PRIVATE_KEY, {
						algorithm: "HS256",
						expiresIn: process.env.TOKEN_EXPIRES * 30,
					});

					return { message: "Authentication successful", access_token: tk };
				} else {
					return messageHelper.error("Invalid password", "Password");
				}
			} else {
				return messageHelper.error("Invalid email", "User not found");
			}
		}
	} catch (error) {
		console.error(error);
	}
};

const checkPassword = async (password, savedPassword) => {
	if (await bcrypt.compareSync(password, savedPassword)) {
		return true;
	} else {
		return false;
	}
};
module.exports = { createUser, authenticate };
