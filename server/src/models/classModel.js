import mongoose from "mongoose";

const ClassSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	proficiency: {
		type: Number,
		required: true,
		enum: [0, 1, 2, 3, 4],
	},
	prompt: {
		type: String,
	},
});

const Class = mongoose.model("Class", ClassSchema);

export default Class;
