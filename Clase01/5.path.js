// el path nos dice sobre la ubicacion de los archivos
const path = require("node:path");

// unir rutas con path.join --> nos permite unir rutas de forma segura

// Nos dice como es la ruta de nuestro sistema operativo. Barra de separacion segun el SO
console.log(path.sep);

// Unir rutas con path.join. Constrola la ruta segun el SO con __dirname y __filename
const filePath = path.join(__dirname, "archivo.txt");
const filePath2 = path.join(__filename, "archivo2.txt");

console.log(filePath);
console.log(filePath2);

// basename --> Nos dice el nombre del archivo
const base = path.basename(
  " /home/sergio-devs/Escritorio/Curso-NodeJS/Clase01/archivo2.txt",
);
console.log(base, "\n");

// Unos de los mas usados es el extension. Sirve para saber la extension de un archivo
const extension = path.extname("imagen.jpg");
console.log(extension);
