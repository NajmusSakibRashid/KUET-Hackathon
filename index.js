const express = require("express");
const app = express();
const router = express.Router();
const groq = require("./Groq/groq");

const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.use("/groq", groq);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
