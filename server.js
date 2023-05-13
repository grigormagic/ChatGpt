const PORT = 3000;
const cors = require("cors");
const path = require("path");
const express = require("express");
const app = express();

app.use(express.static("chatGpt"));
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "chatGpt", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server runing in port ${PORT}`);
});
