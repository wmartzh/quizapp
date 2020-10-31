const mongoose = require("mongoose");
const mongoConnection = async () => {
	let DB = process.env.DATABASE_URI;

	mongoose.set("useCreateIndex", true);
	mongoose.set("useFindAndModify", false);

	mongoose
		.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
		.then(() => console.log("mongoDB connected Successfully"))
		.catch((err) => console.log(err));
};
module.exports = mongoConnection;
