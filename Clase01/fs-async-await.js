// async-await es una forma de trabajar con promesas

const { readFile } = require("node:fs/promises");

async function init() {
  console.log("Leyendo el primer archivo txt: \n");
  const text = await readFile("./archivo.txt", "utf-8");
  console.log("Primer texto: ", text);

  console.log("Marcar cosas mientras leo el archivo....");

  console.log("\nLeyendo el segundo archivo txt: \n");
  const segundoTexto = await readFile("./archivo2.txt", "utf-8");
  console.log("Segundo texto:", segundoTexto);
}

init();

// IIFE - Immediately Invoked Function Expression
/*
(async () => {
  console.log("Leyendo el primer archivo txt: \n");
  const text = await readFile("./archivo.txt", "utf-8");
  console.log("Primer texto: ", text);

  console.log("Marcar cosas mientras leo el archivo....");

  console.log("\nLeyendo el segundo archivo txt: \n");
  const segundoTexto = await readFile("./archivo2.txt", "utf-8");
  console.log("Segundo texto:", segundoTexto);
})();
*/
