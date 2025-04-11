const { Catbox } = require("node-catbox");
const fs = require('fs-extra');
const axios = require('axios');

const catbox = new Catbox();

async function uploadToCatbox(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error("File does not exist");
  }
  try {
    const uploadResult = await catbox.uploadFile({ path: filePath });
    return uploadResult;
  } catch (error) {
    throw new Error(`Catbox upload failed: ${error.message}`);
  }
}

async function analyzeImage(imageUrl, text) {
  try {
    const apiUrl = `https://apis-keith.vercel.app/ai/gemini-vision?image=${encodeURIComponent(imageUrl)}&q=${encodeURIComponent(text)}`;
    const response = await axios.get(apiUrl);
    
    if (response.data.status && response.data.result) {
      return response.data.result;
    }
    throw new Error("API response was not successful");
  } catch (error) {
    throw new Error(`Vision API error: ${error.message}`);
  }
}

module.exports = { uploadToCatbox, analyzeImage };
