const genAI = require("../config/gemini");

const extractProductsFromInvoice = async (text) => {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const prompt = `
Extract the products from the following invoice.

Return ONLY valid JSON.

Invoice:
${text}
`;

  const result = await model.generateContent(prompt);
  return result.response.text();
};

module.exports = {
  extractProductsFromInvoice,
};