import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    const prompt = `
You are an expert student risk analyst.

Analyze this student discussion:

${text}

Return ONLY valid JSON in this format:

{
  "placement_anxiety": 0,
  "burnout_risk": 0,
  "internship_scarcity": 0,
  "skill_gap_risk": 0,
  "cyber_scam_risk": 0,
  "root_causes": [],
  "recommendations": []
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const raw = response.text ?? "";

    const cleaned = raw
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsed = JSON.parse(cleaned);
    console.log("PARSED RESPONSE:", parsed);

if (parsed.placement_anxiety <= 10)
  parsed.placement_anxiety *= 10;

if (parsed.burnout_risk <= 10)
  parsed.burnout_risk *= 10;

if (parsed.internship_scarcity <= 10)
  parsed.internship_scarcity *= 10;

if (parsed.skill_gap_risk <= 10)
  parsed.skill_gap_risk *= 10;

if (parsed.cyber_scam_risk <= 10)
  parsed.cyber_scam_risk *= 10;

return NextResponse.json(parsed);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Analysis failed" },
      { status: 500 }
    );
  }
}