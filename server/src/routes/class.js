import express from "express";
import Class from "../models/classModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		console.log("hi");
	} catch (err) {
		return res.status(500).send(err);
	}
});

router.post("/", async (req, res) => {
	try {
		const data = await schema.validateAsync(req.body);

		const newClass = new Class({
			title: data.title,
			proficiency: data.proficiency,
			prompt: data.prompt,
		});

		const savedClass = await newClass.save();
		s;
		return res.send(savedUser);
	} catch (err) {
		return res.status(500).send(err);
	}
});

export default router;
