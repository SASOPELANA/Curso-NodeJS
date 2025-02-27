// promesas en javascript --> promises. En ves de usar callbacks usamos promesas
// es recomendable usar promesas en su mayoria, cuando sea necesario

const fs = require("node:fs/promises");

// callback

console.log("Leyendo el primer archivo txt: \n");
// se debe indicar la ruta del archivo, y convertirlo a texto utf-8
// asincrono con readFile
fs.readFile("./archivo.txt", "utf-8").then((text) => {
  console.log("Primer texto: ", text);
});

console.log("Marcar cosas mientras leo el archivo....");

console.log("\nLeyendo el segundo archivo txt: \n");
// se debe indicar la ruta del archivo, y convertirlo a texto utf-8
fs.readFile("./archivo2.txt", "utf-8").then((text2) => {
  console.log("Segundo texto:", text2);
});
