const messageHelper = require("../helpers/messageHelper");
const { userValidator } = require("../validators/userValidator");
const { User } = require("../models/User");
const bcrypt = require("bcrypt");

const createUser = async (data) => {
	try {
		const { error, value } = userValidator.validate(data);
		if (error) {
			return messageHelper.error("Invalid data", error.details);
		} else {
			let existUser = await User.getByEmail(value.email);
            console.log(existUser)
			if (existUser.length > 0) {
				return messageHelper.error("Mail Error", "Email already exists");
			} else {
				let hash = bcrypt.hashSync(value.password,10);
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

module.exports = { createUser };
