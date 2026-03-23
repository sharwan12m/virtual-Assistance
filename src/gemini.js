import { GoogleGenerativeAI } from "@google/generative-ai";
let api_Key = "AAIzaSyCe_5AhNsxp77igPOw58wUZ8GJR9-B6VF0";

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
