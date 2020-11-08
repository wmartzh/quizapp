const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	username: "string",
	name: "string",
	email: "string",
	password: "string",
	remember_token: "string",
	
},{timestamp:true});

userSchema.statics.getByEmail = async function (email) {
	let user = await this.findOne({ email: email });
	return user;
};

userSchema.statics.getById =async function (id) {
	let user = await this.find({ _id: id });
	return user;
};
userSchema.statics.getAll= async function () {
	let user = await this.find({});
	return user;
};
userSchema.statics.updateToken = async function (id, token) {
	let user = await this.findOneAndUpdate(
		{ _id: id },
		{ remember_token: token },
		{ new: true }
	);
	return user;
};
const User = mongoose.model("Users", userSchema);

module.exports = { userSchema, User };
