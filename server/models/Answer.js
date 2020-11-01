const mongoose = require("mongoose");

const answerSchema = mongoose.Schema(
	{
		question_id: "string",
		title: "string",
		isCorrect: "boolean",
	},
	{ timestamp: true }
);

const Answer = mongoose.model("Answers", answerSchema);
module.exports = { Answer, answerSchema };
