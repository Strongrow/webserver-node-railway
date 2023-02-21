const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

const app = express();
const port = process.env.PORT;
const tnombre = "Juan Camilo";
const ttitulo = "Curso Node";

// Handlebars
app.set("view engine", "hbs");

hbs.registerPartials(__dirname + "/views/partials", function (err) {});
// servir contenido estatico

app.use(express.static("public"));

/* app.get("/", (req, res) => {
  res.send("hola mundo");
}); */

app.get("/", (req, res) => {
  res.render("home", {
    nombre: tnombre,
    titulo: ttitulo,
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: tnombre,
    titulo: ttitulo,
  });
});
/* app.get("/generic", (req, res) => {
  res.sendFile(__dirname + "/public/generic.html");
}); */

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: tnombre,
    titulo: ttitulo,
  });
});
/* app.get("/elements", (req, res) => {
  res.sendFile(__dirname + "/public/elements.html");
});
 */
app.get("*", (req, res) => {
  res.render("404");
});
/* app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
}); */

app.listen(port);
