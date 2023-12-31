import express from 'express';
import * as dotenv from 'dotenv';
import  OpenAIApi from "openai";

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration);

router.route('/').get((req, res) => {
    res.send('hello from the bots')
})

export default router;
