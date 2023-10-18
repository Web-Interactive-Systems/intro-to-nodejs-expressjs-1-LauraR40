/**
 Todo Complete this app
 
 - Check the documentation of expressjs to serve a json response // OK
 - Add an array of matches to the file `data/matchs.json` // OK
 - Create an express server that serve the content of `data/matchs.json` as a json response // OK
 */

const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

// Middleware pour gérer le contenu JSON
app.use(express.json());

// Route pour servir le fichier JSON
app.get("/matches", (req, res) => {
  fs.readFile("./data/matchs.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Unable to read the file" });
      return;
    }
    try {
      const matches = JSON.parse(data);
      res.json(matches);
    } catch (error) {
      res.status(500).json({ error: "Unable to parse JSON" });
    }
  });
});

// Écoute du serveur
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
