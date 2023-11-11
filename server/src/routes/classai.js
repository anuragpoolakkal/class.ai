import { Configuration, OpenAIApi } from "openai";
import express from "express";
import joi from "joi";
import validate from "../util/userValidate.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("classai");
});


router.get("/", (req, res) => {
    res.send("classai");
});

const systemPrompt = "Given the words from a speech on a particular topic, your task is to generate a presentation slide. Provide a clear and concise title, along with an easy-to-understand body content suitable for a presentation. Additionally, suggest keywords that can be used to search for relevant images related to the topic. The API response should include the title, body, and a list of keywords for image search, formatted as follows:\n\n{\n  'title': 'Your Generated Title',\n  'body': 'Your Generated Presentation Content',\n  'keywords': ['keyword1', 'keyword2', ...]\n}";

router.post("/generate", validate, async (req, res) => {
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    })

    const openai = new OpenAIApi(configuration);

    const schema = joi.object({
        speech: joi.string().required(),
    });

    try {
        
    } catch (error) {
        
    }


});