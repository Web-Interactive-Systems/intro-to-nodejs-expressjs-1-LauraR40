/**
 Todo Complete this app
 
 - Check the documentation of expressjs
 - Create an express server
 - The server should implements the following APIs
  // app.get
  // app.post
  // app.put
  // app.delete
  // app.all
  // app.use
  // app.listen

  -- Hint, use postman to interact with the server 
  
 */

// app.get(("/api/ping", (req, res)) => {
//     console.log("GET_PING", req.url);
//     res.status(200).send("pong");
// });

// app.post((req, res) => {
//   req.post("http://localhost:3000");
// });

const express = require("express");
const app = express();

// Middleware pour le traitement des données POST
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route GET
app.get("/", (req, res) => {
  res.status(200).send("pong");
});

// Route POST
app.post("/", (req, res) => {
  res.send("POST request received"); // envoie du texte
});

// Route PUT
app.put("/", (req, res) => {
  res.send("PUT request received");
});

// Route DELETE
app.delete("/", (req, res) => {
  res.send("DELETE request received");
});

// Route ALL
app.all("/all", (req, res) => {
  res.send("Handling all HTTP methods");
});

// Middleware générique
app.use((req, res, next) => {
  console.log("This middleware runs for all routes");
  next();
});

// Écoutez le serveur sur un port spécifique (par exemple, 3000)
const port = 3000;
app.listen(port, () => {
  console.log(`Serveur Express en cours d'exécution sur le port ${port}`);
});

// Gérer les URL non trouvées
app.use((req, res) => {
  res.status(404).send("Page not found");
});

//existe Midware qui s'apelle texte
