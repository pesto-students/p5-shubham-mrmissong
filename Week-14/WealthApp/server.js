const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./user");

const app = express();
const dbURI =
	"mongodb+srv://vscodemissong:mortyparty@mancode.ku2ubmu.mongodb.net/?retryWrites=true&w=majority";
mongoose.set("strictQuery", true);
mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((result) =>
		app.listen(5000, () => {
			console.log("i'm running");
		})
	)
	.catch((err) => {
		console.log(err);
	});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/users", (req, res) => {
	User.find()
		.then((data) => {
			console.log(data);
			res.json(data);
		})
		.catch((error) => {
			console.log(error);
		});
});
app.get("/users/:id", (req, res) => {
	const id = req.params.id;
	User.findById(id)
		.then((data) => {
			res.json(data);
		})
		.catch((error) => {
			console.log(error);
		});
});
