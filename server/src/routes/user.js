import express from "express";
import joi from "joi";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validate from "../util/userValidate.js";

const router = express.Router();

router.get("/", validate, (req, res) => {
	res.send("Users");
});

router.post("/signup", async (req, res) => {
	const schema = joi.object({
		username: joi.string().min(3).required(),
		email: joi.string().min(6).required().email(),
		password: joi.string().min(6).required(),
		type: joi.string().required(),
	});

	try {
		const data = await schema.validateAsync(req.body);

		if (await User.findOne({ email: data.email })) return res.status(400).send("Email already exists");

		const hashedPassword = await bcrypt.hash(data.password, 10);

		const newUser = new User({
			username: data.username,
			email: data.email,
			password: hashedPassword,
			type: data.type,
		});

		const savedUser = await newUser.save();

		return res.send(savedUser);
	} catch (err) {
		return res.status(500).send(err);
	}
});

router.post("/login", async (req, res) => {
	const schema = joi.object({
		email: joi.string().min(6).required().email(),
		password: joi.string().min(6),
	});

	try {
		const data = await schema.validateAsync(req.body);

		const user = await User.findOne({ email: data.email });

		if (!user) return res.status(400).send("Email or password is wrong");

		const validPassword = await bcrypt.compare(data.password, user.password);

		if (!validPassword) return res.status(400).send("Email or password is wrong");

		const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);

		return res.send({ user: user, token: token });
	} catch (err) {
		return res.status(500).send(err);
	}
});

export default router;
