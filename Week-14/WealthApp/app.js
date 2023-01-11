const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
const User = require("./user");
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded());

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const dbURI =
	"mongodb+srv://vscodemissong:mortyparty@mancode.ku2ubmu.mongodb.net/?retryWrites=true&w=majority";
mongoose.set("strictQuery", true);
mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }) // for connection of DB; second arg not compulsory(only to avoid a warning)
	.then((result) => {
		console.log("server is running on 3000");
		app.listen(3000);
	})
	.catch((err) => {
		console.log(err);
	});

app.post("/users", (req, res) => {
	const id = req.params.id;
	// const username = req.body.username;
	// const password = req.body.password;
	User.find()
		.then((data) => {
			// const exprense = main.details;
			// const details = data[0].details;
			// console.log(
			// 	Number(details.income.salary) - Number(details.income.expenses)
			// );
			res.send(data);
		})
		.catch((err) => {
			console.log(err);
			// console.log(err);
		});
});
