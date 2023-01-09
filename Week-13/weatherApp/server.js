const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();
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
	}&appid=429bc2066143d059bd734e7dece07fcd&units=metric&count=${count}`;

	https.get(url, (response) => {
		response.on("data", (data) => {
			const weather = JSON.parse(data);
			list = weather.list;
			list.forEach((e) => {
				main.push([e.main, e.weather[0].description, e.dt_txt]);
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
