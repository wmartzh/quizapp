const { Quiz } = require("../models/Quiz");
const { Question } = require("../models/Question");
const { Answer } = require("../models/Answer");
const messageHelper = require("../helpers/messageHelper");
const quizValidator = require("../validators/quizValidator");
const createQuiz = async (params) => {
	try {
		const { error, value } = quizValidator.validate(params);

		if (error) {
			return messageHelper.error("Invalid data", error.details);
		} else {
			let newQuiz = await Quiz.create({
				title: value.title,
				description: value.description,
			});
			let newQuestions;
			value.questions.forEach(async (question) => {
				let newQuestion = await Question.create({
					quiz_id: newQuiz._id,
					statement: question.statement,
				});
				let newAnswers;
                
				question.answers.forEach(async (answers) => {
					let newAnswer = await Answer.create({
						question_id: newQuestion._id,
						title: answers.title,
						isCorrect: answers.isCorrect,
					});

					newAnswers.push(newAnswer);
				});
				newQuestion.answers = newAnswers;
				newQuestion.save();
				newQuestions.push(newQuestion);
			});
			newQuiz.questions = newQuestions;
			newQuiz.save();

			return newQuiz;
		}
	} catch (error) {
		return messageHelper.error("Exception", error);
	}
};

module.exports = { createQuiz };
