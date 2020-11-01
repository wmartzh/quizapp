const quizHandler = require("../handlers/quizHandler")


const storeQuiz = async(req,res)=>{
    try {
		let newQuiz = await quizHandler.createQuiz(req.body);
		if (newQuiz.error) {
			res.status(400).json(newQuiz);
		} else {
			res.status(201).json(newQuiz);
		}
	} catch (error) {
		res.status(500).json("Server Internal Error");
	}
}


module.exports ={storeQuiz}