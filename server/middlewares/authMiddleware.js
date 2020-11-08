const bcrypt = require("bcrypt");
const messageHelper = require("../helpers/messageHelper");
const {User} = require("../models/User");
const jose = require("jose");
const moment = require("moment");
const auth = async (req, res, next) => {
	try {
		const token = req.headers.authorization;

		if (token) {
			const tokenDecoded = jose.JWT.verify(token, process.env.PRIVATE_KEY);
		
			let user = await User.getByEmail(tokenDecoded.email);
			if(user){
				next();
			}else{
			res.status(401).json(messageHelper.error("AuthError", {description:"User does not exist"}));

			}
		
		} else {
			res.status(400).json(messageHelper.error("Token is required"));
		}
	} catch (err) {
	
		if (err.code == "ERR_JWT_EXPIRED") {
			res.status(401).json(messageHelper.error("AuthError", {description:"Token expired"}));
		} else {
			res.status(500).json(messageHelper.error("Exception", err));
		}
	}
};

module.exports = { auth };

//test expired
//eyJhbGciOiJIUzI1NiJ9.eyJjaGVjayI6dHJ1ZSwiZW1haWwiOiJwYXF1aXRvM0BtYWlsLmNvbSIsImlhdCI6MTYwNDgwMDcyMywiZXhwIjoxNjA0ODAwNzUzfQ.yG-a08uu0aexKHLdzNTgFlp_TTLUS7Q-Bym-cs6pAlY
//test user not foud
//eyJhbGciOiJIUzI1NiJ9.eyJjaGVjayI6dHJ1ZSwiZW1haWwiOiJ0ZXN0QG1haWwuY29tIiwiaWF0IjoxNjA0ODAxNTM5LCJleHAiOjE2MDUyMzM1Mzl9.IADjezpO_eFjYLTWmgkfReGX-wEVfpv4XH5IN6YorxM