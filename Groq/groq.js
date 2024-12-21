const express = require("express");
const router = express.Router();
const axios = require("axios");
const mysql = require("mysql2");

router.use(express.json());

var con = mysql.createConnection({
  host: "localhost",
  user: "sakib",
  password: "!Password123",
  database: "kuet_hackathon",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

router.post("/", async (req, res) => {
  const url = "https://api.groq.com/openai/v1/chat/completions";
  const api_key = "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";
  const prompt = `
  You are a data parser. Extract structured information from the following recipe text into the following JSON format:
    {
      "name": "Recipe Name",
      "description": "Description of the recipe",
      "prep_time": "Preparation time in minutes (only integer)",
      "cook_time": "Cooking time in minutes (only integer)",
      "total_time": "Total time in minutes (only integer)",
      "servings": "Number of servings",
      "ingredients": [
        {"name": "Ingredient 1", "quantity": "Quantity 1"},
        {"name": "Ingredient 2", "quantity": "Quantity 2"}
      ],
      "steps": [
        "Step 1",
        "Step 2",
        "Step 3"
      ],
      "categories": ["Category 1", "Category 2"]
    }
    Here is the recipe text:
    ${req.body.recipe}
  `;
  const { data } = await axios.post(
    url,
    {
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama3-8b-8192",
    },
    {
      headers: {
        Authorization: `Bearer ${api_key}`,
        "Content-Type": "application/json",
      },
    }
  );
  const string = data.choices[0].message.content;
  const jsonPattern = /(\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})*\})/g;
  // Search for the pattern in the string
  const matches = [...string.matchAll(jsonPattern)];

  matches.forEach((match) => {
    // Each match[0] will contain a JSON string, replace single quotes with double quotes (if needed)
    let jsonString = match[0].replace(/'/g, '"');

    try {
      const jsonObject = JSON.parse(jsonString);
      res.status(200).send(jsonObject); // Log the extracted JSON object
    } catch (e) {
      res.status(200).send("Invalid JSON string", e);
    }
  });
});

module.exports = router;
