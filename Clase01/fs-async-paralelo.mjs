// async-await paralelo es una forma de trabajar con promesas
// async-await es una forma de trabajar con promesas

// Este metodo es mas rapido que los demas await, por que hace dos trabajos en paralelo

import { readFile } from "node:fs/promises";

Promise.all([
  readFile("./archivo.txt", "utf-8"),
  readFile("./archivo2.txt", "utf-8"),
]).then(([text, text2]) => {
  console.log("Primer texto: ", text);
  console.log("Segundo texto:", text2);
});
