const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	username: "string",
	name: "string",
	email: "string",
	password: "string",
	remember_token: "string",
	timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
});

userSchema.statics.getByEmail(function(email){
    let user = await this.find({email:email});
    return user
});

userSchema.statics.getById(function(id){
    let user = await this.find({_id:id});
    return user
});
userSchema.statics.getAll(function(){
    let user = await this.find({});
    return user
});

const User = mongoose.model("Users",userSchema);

module.exports = { userSchema, User };
