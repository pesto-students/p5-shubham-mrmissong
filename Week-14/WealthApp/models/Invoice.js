const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");

const invoiceSchema = new Schema(
	{
		ImageDesc: { type: String, required: true },
		myImage: {
			data: { type: Buffer },
			contentType: { type: String },
			imageName: { type: String },
		},
		userid: { type: Schema.Types.ObjectId, ref: "User" },
	},
	{ timestamps: true }
);

const Invoice = mongoose.model("Invoices", invoiceSchema);
module.exports = Invoice;
