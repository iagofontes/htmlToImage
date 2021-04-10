const nodeHtmlToImage = require("node-html-to-image");
const fs = require("fs");

nodeHtmlToImage({
  output: "./assets/image.png",
  html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ8Fent2Q_d0K3r_mQMmjU0PCcK2NNyJnD7g&usqp=CAU" alt="teste">
  </body>
  </html>'`,
  //   content: { name: "teste top!" },
}).then(() => {
  var bitmap = fs.readFileSync("./assets/image.png");
  const imageString = new Buffer(bitmap).toString("base64");
  console.log(imageString);
  console.log("The image was created successfully!");
});
