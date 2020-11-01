const joi = require("joi");

const answerValidator = joi.object({
	title: joi.string().required(),
	isCorrect: joi.boolean().required(),
});

const questionValidator = joi.object({
    statement : joi.string().required(),
    answers:joi.array().items(answerValidator).required(),

});

const quizValidator = joi.object({
    title: joi.string().required(),
    description: joi.string().required(),
    questions: joi.array().items(questionValidator).required()
})

module.exports = {quizValidator}