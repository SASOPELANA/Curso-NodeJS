// fs  --> file system --> sistema de archivos

const fs = require("node:fs"); // a partir de Node 16, se recomienda usar node: antes del modulo 'fs','os', 'http'

// sincrono
const stats = fs.statSync("./archivo.txt");

console.log(
  stats.isFile(), // si es un archivo
  stats.isDirectory(), // si es un directorio
  stats.isSymbolicLink(), // si es un enlace simbolico
  stats.size, // tamaño
);
