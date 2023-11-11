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



const generatePresentationSlide = async (speech) => {
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);
    
    const systemPrompt = "You are the Real-time Live Educational Presentation generator. Given the main topic of the class and snippets of an ongoing speech, your task is to generate content for the current slide in the live presentation. If the topic is not provided, predict it from the speech. Return a parsable JSON containing title, body, and keyword for the slide. The body should be a concise educational explanation of the topic in a presentation style. Keyword is essential for fetching images related to the topic. Remember, only a small amount of words from the speech are given at a time. Ensure the generated content resembles a PPT presentation slide."
    try {
       
        const response = await openai.complete({
            engine: 'text-davinci-002', // You can experiment with different engines
            prompt: `${systemPrompt}\n\nTopic: ${speech}`,
            max_tokens: 150,
        });

        // Extract relevant information from the OpenAI response
        const generatedContent = response.data.choices[0].text.trim();

        // You can further process the generated content if needed

        // Create a JSON object with title, body, and keyword
        const presentationSlide = {
            title: "Generated Title", // You can customize this
            body: generatedContent,
            keyword: "Generated Keyword", // You can customize this
        };

        return presentationSlide;
    } catch (error) {
        console.error('Error generating presentation slide:', error);
        throw error;
    }
};

router.post("/generate", async (req, res) => {
    const schema = joi.object({
        speech: joi.string().required(),
    });

    try {
        // Validate request body
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const { speech } = req.body;

        // Generate presentation slide content
        const presentationSlide = await generatePresentationSlide(speech);

        // Return the generated content as JSON
        res.json(presentationSlide);
    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;