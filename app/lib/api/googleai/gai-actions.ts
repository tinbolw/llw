"use server";

// HarmBlockThreshold, HarmCategory removed from below import
import {GoogleGenerativeAI} from "@google/generative-ai";
import {systemInstruction} from "@/app/lib/api/googleai/systemInstruction";

const apiKey = process.env.GEMINI_API_KEY;

const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

const model = genAI ? genAI.getGenerativeModel({
    // 1500 requests a day for free, highly unlikely limit will be reached, but should probably account for that somehow
    model: "gemini-1.5-flash", // 15 RPM LIMIT FOR FREE TIER
    systemInstruction: systemInstruction,
}) : null;

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

export async function askJit(prompt: string) {
    if (!model) return "model unavailable... probably due to lack of api key... contact developer...";
    const chatSession = model.startChat({
        generationConfig,
        history: [],
    });

    try {
        const result = await chatSession.sendMessage(prompt);
        return result.response.text();
    } catch (err) {
        console.error(err);
        return "error has occurred.";
    }
}