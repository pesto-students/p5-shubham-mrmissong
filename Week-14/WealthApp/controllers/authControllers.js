const User = require("../models/User");
const Finance = require("../models/Finance");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = (req, res, next) => {
	bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
		if (err) {
			res.json({
				error: err,
			});
		}
		let user = new User({
			name: req.body.name,
			email: req.body.email,
			phone: req.body.phone,
			password: hashedPass,
		});
		user
			.save()
			.then((user) => {
				res.json({ message: "user added" });
			})
			.catch((error) => {
				res.json({ message: "error" });
			});
	});
};

const login = (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	User.findOne({ $or: [{ email: username }, { phone: username }] }).then(
		(user) => {
			if (user) {
				bcrypt.compare(password, user.password, (error, result) => {
					if (error) {
						res.json({
							error: error,
						});
					}
					if (result) {
						let token = jwt.sign({ name: user.name }, "secretToken", {
							expiresIn: "24h",
						});
						res.json({ message: "successful login", token: token });
					} else {
						res.json({ message: "password doesn't match" });
					}
				});
			} else {
				res.json({
					message: "user not found",
				});
			}
		}
	);
};

const financePost = (req, res) => {
	let userFinance = new Finance({
		userid: req.params.userid,
		FD: req.body.FD,
		MF: req.body.MF,
		SAL: req.body.SAL,
		EXP: req.body.EXP,
	});

	userFinance
		.save()
		.then((data) => {
			res.status(200).json({ message: "user finance updated" });
		})
		.catch((error) => {
			res.json({ message: "error" });
		});
};

const financeGet = (req, res) => {
	const userid = req.params.userid;

	Finance.find({ userid })
		.sort({ createdAt: -1 })
		.then((data) => {
			res.json({ message: "details", data });
		})
		.catch((error) => {
			res.json({ message: "error" });
		});
};
const deleteUserInfo = (req, res) => {
	const userid = req.params.userid;
	Finance.findOneAndDelete({ userid })
		.then(() => {
			res.json({ message: "User details have been deleted" });
		})
		.catch(() => {
			res.json({ message: "There was some error" });
		});
};

const savingsGet = (req, res) => {
	const userid = req.params.userid;
	User.findById(userid)
		.then((data) => {
			Finance.findOne({ userid }).then((result) => {
				const { name, phone } = data;
				const savings = result.SAL - result.EXP;
				console.log(savings);
				const { SAL, EXP } = result;
				res.json({
					name: name,
					phone: phone,
					Savings: savings,
					Income: { Salary: SAL, Expenses: EXP },
				});
			});
		})
		.catch((err) => {
			res.json({ message: "error" });
		});
};
const billPost = (req, res) => {};
module.exports = {
	register,
	login,
	financePost,
	financeGet,
	savingsGet,
	deleteUserInfo,
};
