const express = require("express");

const app = express();
const puerto = 8080;


app.get("/", (req, res) => {    
  res.send('Hola Mundo!');
});

const server = app.listen(puerto, () => {
  console.log(`servidor escuchando en http://localhost:${puerto}`);
});

server.on("error", (error) => {
  console.log("error en el servidor:", error);
});