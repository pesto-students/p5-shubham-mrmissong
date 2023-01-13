const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");
const financeSchema = new Schema(
	{
		FD: { type: String, value: Number },
		MF: { type: String, value: Number },
		SAL: { type: String, value: Number },
		EXP: { type: String, value: Number },
		userid: { type: Schema.Types.ObjectId, ref: "User" },
	},
	{ timestamps: true }
);

const Finance = mongoose.model("finance", financeSchema);
module.exports = Finance;
