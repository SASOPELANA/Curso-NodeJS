// ls -> leer arcivos de un directorio
// callback -->  funcion que se ejecuta cuando se cumple una tarea asincrona

const fs = require("node:fs");

// recorre todos los archivos de un directorio
// '.'  -> directorio actual
// '..' -> directorio padre
// './' -> directorio actual

// Primero se maneja el error y luego el callback
fs.readdir(".", (err, files) => {
  if (err) {
    console.error("Error al leer el directorio", err);
    return;
  }

  files.forEach((file) => {
    console.log(file);
  });
});

// hacerlos con promesas
console.log("");
const promises = require("node:fs/promises");

promises
  .readdir(".")
  .then((files) => {
    files.forEach((file) => {
      console.log(file);
    });
  })
  .then((err) => {
    if (err) {
      console.error("Error al leer el directorio", err);
      return;
    }
  });
