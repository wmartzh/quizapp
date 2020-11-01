const mongoose = require("mongoose");
const questionSchema = require("./Question");
const quizSchema = mongoose.Schema(
	{
		user_id: mongoose.SchemaType.ObjectId,
		title: "string",
		description: "string",
		questions: [questionSchema],
	},
	{ timestamp: true }
);

const Quiz = mongoose.model("Quizes", quizSchema);

module.exports = { quizSchema, Quiz };
