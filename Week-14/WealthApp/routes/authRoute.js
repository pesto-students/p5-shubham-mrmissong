const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/user/:userid", authController.financePost);
router.get("/user/finances/:userid", authController.financeGet);
router.get("/user/savings/:userid", authController.savingsGet);
router.delete("/user/:userid", authController.deleteUserInfo);
router.post("/user/image/:userid", authController.uploadPost);
router.get("/user/uploads/:userid", authController.uploadGet);

module.exports = router;
