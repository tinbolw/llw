"use server";

import { GoogleGenAI } from "@google/genai";
import { systemInstruction } from "@/app/lib/api/googleai/systemInstruction";

const ai = new GoogleGenAI({});

export async function askJit(prompt: string): Promise<String> {
  const interaction = await ai.interactions.create({
    model: "gemini-3.5-flash",
    input: prompt,
    system_instruction: systemInstruction,
  });
  return interaction.output_text ?? "";
}
