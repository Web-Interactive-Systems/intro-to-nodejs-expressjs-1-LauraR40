const http = require("http");

/**
 Todo Complete this app to serve the content inside `static` folder
 
 - Create an http server that serves the app in: `static/html/index.html`
 - The app shows navigation pages that should be created and placed inside `static/html`
 - If an url is not found the app should serve "Page not found"

 -- Hint, it possible to read a file using `readFileSync` of fs module and serve it to the client
 */

const server = http.createServer((req, res) => {
  //
});

server.listen(3000);
