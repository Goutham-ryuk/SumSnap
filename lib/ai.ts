// lib/ai.ts
import OpenAI from "openai";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  PDF_SUMMARY_SYSTEM_PROMPT,
  PDF_SUMMARY_USER_PROMPT,
} from "@/lib/prompt";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// ✅ Correct config for Gemini v1 API
const geminiModel = genAI.getGenerativeModel({
  model: "gemini-flash-latest",
  generationConfig: {
    temperature: 0.3,
    maxOutputTokens: 1000,
  },
});

export async function generatePDFSummaryWithFallback(
  pdfText: string
): Promise<string> {
  const userPrompt = PDF_SUMMARY_USER_PROMPT.replace(
    "{text}",
    pdfText.slice(0, 12000)
  );

  // Try OpenAI
  try {
    console.log("Trying OpenAI...");
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: PDF_SUMMARY_SYSTEM_PROMPT },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.3,
      max_tokens: 1000,
    });

    const result = response.choices[0]?.message?.content?.trim();
    if (result) {
      console.log("✅ OpenAI succeeded");
      return result;
    }
  } catch (error) {
    console.warn("⚠️ OpenAI failed → switching to Gemini");
  }

  // Try Gemini
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("OpenAI failed and GEMINI_API_KEY not set");
  }

  try {
    console.log("Trying Gemini...");

    const result = await geminiModel.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: PDF_SUMMARY_SYSTEM_PROMPT + "\n\n" + userPrompt }],
        },
      ],
    });

    const text = result.response.text();
    if (text && text.trim()) {
      console.log("✅ Gemini succeeded");
      return text.trim();
    }

    throw new Error("Gemini returned empty text");
  } catch (error: any) {
    console.error("❌ Gemini failed:", error);
    throw new Error("Both OpenAI and Gemini failed. Try again later.");
  }
}
