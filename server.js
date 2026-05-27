const express = require("express");
const path = require("path");
const cors = require("cors");
const db = require("./db");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

// Save volunteer form
app.post("/volunteer", (req, res) => {
  const { name, email, message } = req.body;

  const sql =
    "INSERT INTO volunteers (name, email, message) VALUES (?, ?, ?)";

  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error saving volunteer");
    }

    res.send("Volunteer registered successfully!");
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});