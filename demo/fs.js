const fs = require("fs");
const path = require("path");
//makes new dir
// fs.mkdir(path.join(__dirname, "test"), (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Folder is made");
// });

const filePath = path.join(__dirname, "test", "test.txt");
////rewrites file content
fs.writeFile(filePath, "Hello Node js", (err) => {
  if (err) {
    throw err;
  }
  console.log("file is made");
  //adds to existing file new content
  fs.appendFile(filePath, "\nHello again", (err) => {
    if (err) {
      throw err;
    }
  });
});
fs.readFile(filePath, "utf-8", (err, content) => {
  if (err) {
    throw err;
  }
  // const data = Buffer.from(content);
  // console.log("Content: ", data.toString());
  // console.log(content.toString());
  console.log(content);
});
