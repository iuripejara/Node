const path  = require ("node:path")
const os    = require ("node:os")
const fs    = require ("node:fs")
function Sistemasops() {
    const sistema = os.type()
    const arquitetura = os.arch()
    const procesadore = os.cpus()
    let tempoativo = os.uptime
    
    let tempoMinuto = tempoativo    /60
    let tempoHora   = tempoMinuto   /60

    tempoativo  =   Math.floor(tempoativo)
    tempoMinuto =   Math.floor(tempoMinuto)
    tempoHora   =   Math.floor(tempoHora)

    tempoativo  =   tempoativo  %60
    tempoMinuto =   tempoMinuto %60
    tempoHora   =   tempoHora   %60

    console.log(`tempo Ativo: ${tempoHora} hrs ${tempoMinuto} minu ${tempoativo} segu`)


    const memoriaTotal      = os.totalmem()
    const memoriasLivre     = os.freemem()
    const memoriaEmUso      = memoriaTotal - memoriasLivre

    console.log(`Uso da memoria ${((memoriaEmUso / memoriaTotal) * 100).toFixed(2)}%`)

    const newFile = fs.writeFile(path())
}
Sistemasops()