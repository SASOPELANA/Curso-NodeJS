// .js --> por defecto utiliza CommonJS
// .mjs --> por defecto utiliza ES6 Modules
// .cjs --> por defecto utiliza CommonJS

// fomra moderna de importar, recomendada por JavaScript y Node
// importamos varias funciones

import { suma, resta } from "./suma.mjs";

console.log(suma(1, 2));

console.log(resta(10, 5));
