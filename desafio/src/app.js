import express from "express";
import ProductManager from "../../ProductManager.js";

const usuarios = new ProductManager();

const app = express();

app.get("/", (req, res) => {
  res.send("Servidor ON");
});

app.get("/Usuarios", (req, res) => {
  res.send(usuarios);
});

app.get("/Usuarios/:pid", (req, res) => {
  const pid = +req.params.pid;
  let usuario = usuarios.find((usuario) => usuario.id === pid);

  if (!usuario) {
    res.send(`No existe el usuario con el id ${pid}`);
    return;
  }

  res.send(usuario);
});

app.listen(8080, () => {
  console.log("Servidor 8080");
});
