const mongoose = require("mongoose");

const answerSchema = mongoose.Schema({
	question_id: mongoose.SchemaType.ObjectId,
    title:"string",
    isCorrect: mongoose.SchemaType.Boolean,

},{timestamp:true});

const Answer = mongoose.model("Answers", userSchema);
module.exports = {Answer,answerSchema}