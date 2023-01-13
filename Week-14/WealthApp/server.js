if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const authRoute = require("./routes/authRoute");

const dbURI = process.env.dbURI;
mongoose.set("strictQuery", true);
mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((res) => {
		app.listen(3000, () => {
			console.log("started");
		});
	});

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", authRoute);
