/**
 Todo Complete this app
 
 - Check the documentation of expressjs // OK 
 - Create a server that serves a static folder: `public` // OK
 - If an url is not found, the server should serve 'Page not found' // OK
 */

const express = require("express");
const path = require("path");

const app = express();

// console.log("__dirname", __dirname);
// Définir le répertoire statique 'public'
app.use(express.static(path.join(__dirname, "public")));

// Gérer les URL non trouvées
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// Écoutez le serveur sur un port spécifique (par exemple, 3000)
const port = 3000;
app.listen(port, () => {
  console.log(`Serveur Express en cours d'exécution sur le port ${port}`);
});

//Midware = pluggin car express.js est tout petit
