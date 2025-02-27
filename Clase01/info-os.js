// Modulos nativos de node

// Aplicacion de informacion sobre el SO

const os = require("node:os");

console.log(
  "\n              --- Aplicacion de informacion sobre el SO ---            \n",
);

console.log("Informacion del sistema operativo:");

console.log("--------------------------------------------------------------");

console.log("Nombre del sistema operativo: " + os.platform());
console.log("Version del sistema operativo: " + os.release());
console.log("Arquitectura del sistema operativo: " + os.arch());
console.log("CPUs", os.cpus()); // <-- vamos a poder escalar procesos en Node.JS
console.log("Memoria libre:", os.freemem() / 1024 / 1024, "MB");
console.log("Memoria total:", os.totalmem() / 1024 / 1024, "MB");
console.log("Uptime:", os.uptime() / 60 / 60, "minutos");
