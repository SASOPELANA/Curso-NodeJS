// sincrono --> readFile

const fs = require("node:fs");

// callback

console.log("Leyendo el primer archivo txt: \n");
const text = fs.readFileSync("./archivo.txt", "utf-8");
console.log(text);

console.log("Marcar cosas mientras leo el archivo....");

console.log("\nLeyendo el segundo archivo txt: \n");
const text2 = fs.readFileSync("./archivo2.txt", "utf-8");
console.log(text2);
