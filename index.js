// const chalk = require("chalk");
// const text = require("./data");

// console.log(chalk.blue(text));
// console.log(__dirname);
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((request, responce) => {
  let filePath = path.join(
    __dirname,
    "public",
    request.url === "/" ? "index.html" : request.url
  );
  const ext = path.extname(filePath);

  let contentType = "text/html";
  switch (ext) {
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "text/javascript";
    case ".html":
      contentType = "text/html";
  }
  if (!ext) {
    filePath += ".html";
  }

  console.log(filePath);
  fs.readFile(filePath, (err, content) => {
    if (err) {
      fs.readFile(path.join(__dirname, "public", "error.html"), (err, data) => {
        if (err) {
          responce.writeHead(500);
          responce.end("Error");
        } else {
          responce.writeHead(200, { "Content-type": "text/html" });
          responce.end(data);
        }
      });
    } else {
      responce.writeHead(200, {
        "Content-type": contentType,
      });
      responce.end(content);
    }
  });

  // responce.writeHead(200, { "Content-type": "text/html" });
  // responce.writeHead(200, { "Content-type": "text/plain" });
  // if (request.url === "/") {
  //   fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
  //     if (err) {
  //       throw err;
  //     }
  //     responce.writeHead(200, {
  //       "Content-type": "text/html",
  //     });
  //     responce.end(data);
  //   });
  // } else if (request.url === "/contact") {
  //   fs.readFile(path.join(__dirname, "public", "contact.html"), (err, data) => {
  //     if (err) {
  //       throw err;
  //     }
  //     responce.writeHead(200, {
  //       "Content-type": "text/html",
  //     });
  //     responce.end(data);
  //   });
  // }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
