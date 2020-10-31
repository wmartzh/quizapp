const joi = require("joi");

const userValidator = joi.object({
	username: joi.string().required(),
	name: joi.string().allow(null),
	email: joi
		.string()
		.email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
	password: joi.string().required(),
});

module.exports = userValidator;
