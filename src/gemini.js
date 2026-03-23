import { GoogleGenerativeAI } from "@google/generative-ai";
let api_Key = "AIzaSyCGGP78VuXmFfhoDBzgbQ9qRdNvgiOaFe4";

const ai = new GoogleGenerativeAI(api_Key);

async function run(prompt) {
  const model = ai.getGenerativeModel({
    model: "gemini-3-flash-preview",
  });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

export default run;
