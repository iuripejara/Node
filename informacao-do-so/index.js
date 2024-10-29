const os = require("node:os")

const platform = os.platform()

console.log("Plataforma do So",platform)

const arch = os.arch()
console.log("arquitetura do So",arch)

const CPUS = os.cpus()
console.log("procesadore do So",CPUS)

const memorias = os.totalmem()
totalmemorias = memorias/1024/1024/1024
console.log("total de memorias do pc",totalmemorias.toFixed(2)  ,"GB")


