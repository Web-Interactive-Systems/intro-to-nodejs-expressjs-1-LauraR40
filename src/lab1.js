const http = require("http");
const fs = require("fs");

/**
 Todo Complete this app to serve the content inside `static` folder
 
 - Create an http server that serves the app in: `static/html/index.html` //OK
 - The app shows navigation pages that should be created and placed inside `static/html` //OK
 - If an url is not found the app should serve "Page not found" // OK

 -- Hint, it possible to read a file using `readFileSync` of fs module and serve it to the client
 */

const server = http.createServer((req, res) => {
  const url = req.url;

  res.setHeader("Content-Type", "text/html");

  if (url === "/") {
    res.write(`
          <img src="#"></img>
          <button>#</button>
          <a href="/static/html/index.html">Page test -></a>
          <ul>
            <a href="#"><li>Home</li></a>
            <a href="/static/html/about.html"><li>About</li></a>
            <a href="#"><li>Projects</li></a>
            <a href="#"><li>Contacts</li></a>
          </ul>
        `);
  } else if (url === "/static/html/index.html") {
    res.write(`
          <h1>Test</h1>
        `);
  } else if (url === "/static/html/about.html") {
    const appJs = fs.readFileSync("src/static/html/about.html");
    res.end(appJs);
  } else {
    res.statusCode = 404;
    res.write("<p>Page not found</p>");
  }

  res.end();
});

server.listen(3000);

// pour lancer yarn dev
