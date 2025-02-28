// async-await es una forma de trabajar con promesas

import { readFile } from "node:fs/promises";

console.log("Leyendo el primer archivo txt: \n");
const text = await readFile("./archivo.txt", "utf-8");
console.log("Primer texto: ", text);

console.log("Marcar cosas mientras leo el archivo....");

console.log("\nLeyendo el segundo archivo txt: \n");
const segundoTexto = await readFile("./archivo2.txt", "utf-8");
console.log("Segundo texto:", segundoTexto);
