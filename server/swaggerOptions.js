module.exports = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Simple QuizApp Api ",
			version: "0.1.0",
			description: "This is a simple quiz aplication ",
		},
		servers: [
			{
				url: "http://localhost:" + process.env.SERVER_PORT + "/v1",
			},
		],
	},
	apis: ["./router.js"],
};
