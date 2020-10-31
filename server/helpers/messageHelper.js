module.exports = {
	error(title, message) {
		return {
			error: {
				title: title,
				message: message,
			},
		};
	},
	success(title, message) {
		return { title, message };
	},
	succesWithData(title, message, data) {
		return {
			title: title,
			message: message,
			data: data,
		};
	},
};
