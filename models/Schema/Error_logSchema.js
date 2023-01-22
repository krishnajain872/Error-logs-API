const mongoose = require("mongoose");
const Error_Schema = mongoose.Schema(

	{

		error: {
			type: String,
			required: true
		}

	}
	, { timestamps: true })
module.exports = error = Error_Schema;



