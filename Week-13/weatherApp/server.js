if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}
const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

const API_KEY = process.env.API_KEY;
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
	res.send("weather");
});
app.post("/weather", (req, res) => {
	let list = [];
	let main = [];
	const city = req.body.city;
	const zipcode = req.body.zipcode;
	const count = req.body.count;
	const url = ` https://api.openweathermap.org/data/2.5/forecast?q=${
		zipcode ? zipcode : city
	}&appid=${API_KEY}&units=metric&count=${count}`;

	https.get(url, (response) => {
		response.on("data", (data) => {
			const weather = JSON.parse(data);
			list = weather.list;
			list.forEach((e) => {
				let [date, time] = e.dt_txt.split(" ");
				main.push({
					"temperature details": e.main,
					"temperature description": e.weather[0].description,
					date: date,
					time: time,
				});
			});
			const page = req.query.page;
			const limit = req.query.limit;

			const startIndex = (page - 1) * limit;
			const endIndex = page * limit;
			const result = main.slice(startIndex, endIndex);
			res.json(result);
		});
	});
});

app.listen(8080);
