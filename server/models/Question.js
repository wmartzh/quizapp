const mongoose = require("mongoose");
const { answerSchema } = require("./Answer");
const questionSchema = mongoose.Schema(
	{
		quiz_id: "string",
		statement: "string",
		answers: [answerSchema],
	},
	{ timestamp: true }
);
const Question = mongoose.model("Questions", questionSchema);

module.exports = { Question, questionSchema };
