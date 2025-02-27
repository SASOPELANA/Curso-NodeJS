const fs = require("node:fs");

// callback

console.log("Leyendo el primer archivo txt: \n");
// se debe indicar la ruta del archivo, y convertirlo a texto utf-8
// asincrono con readFile
fs.readFile("./archivo.txt", "utf-8", (err, text) => {
  console.log(text);
});

console.log("Marcar cosas mientras leo el archivo....");

console.log("\nLeyendo el segundo archivo txt: \n");
// se debe indicar la ruta del archivo, y convertirlo a texto utf-8
fs.readFile("./archivo2.txt", "utf-8", (err, text) => {
  console.log(text);
});
