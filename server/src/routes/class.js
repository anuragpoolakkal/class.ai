import express from "express";
import Class from "../models/classModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		console.log("class");
	} catch (err) {
		return res.status(500).send(err);
	}
});

router.post("/", async (req, res) => {
	const schema = joi.object({
		title: joi.string().min(3).required(),
		proficiency: joi.string().min(3).required(),
		prompt: joi.string().min(3).required(),
	});

	try {
		const data = await schema.validateAsync(req.body);

		const newClass = new Class({
			title: data.title,
			proficiency: data.proficiency,
			prompt: data.prompt,
		});

		const savedClass = await newClass.save();
		
		return res.send(savedClass);
	} catch (err) {
		return res.status(500).send(err);
	}
});

export default router;
