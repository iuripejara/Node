const path  = require ("node:path")
const os    = require ("node:os")
const fs    = require ("node:fs")

const systemaMap ={
    "win32" : "Windows",
    "linux" : "Linux",
    "darwin" : "MacOS"
}

function ativarFuncao (){
    const sistema = systemaMap[os.platform()]
    const arquitetura = os.arch()
    const procesadore = os.cpus()[0].model
    let tempoativo = os.uptime
    
    let tempoMinuto = tempoativo    /60
    let tempoHora   = tempoMinuto   /60

    tempoativo  =   Math.floor(tempoativo)
    tempoMinuto =   Math.floor(tempoMinuto)
    tempoHora   =   Math.floor(tempoHora)

    tempoativo  =   tempoativo  %60
    tempoMinuto =   tempoMinuto %60
    tempoHora   =   tempoHora   %60

    


    const memoriaTotal      = os.totalmem()
    const memoriasLivre     = os.freemem()
    const memoriaEmUso      = memoriaTotal - memoriasLivre

    return {sistema, arquitetura, procesadore,tempoHora,tempoMinuto,tempoativo,memoriaEmUso}
}

function Sistemasops({sistema, arquitetura, procesadore,tempoHora,tempoMinuto,tempoativo,memoriaEmUso,memoriaTotal}) {
   
    console.clear()
    console.log(`Sistesma Operacional ${sistema} Arquitetura ${arquitetura}`)
    console.log(`Procesador ${procesadore}`)
    console.log(`Uso da memoria ${((memoriaEmUso / memoriaTotal) * 100).toFixed(2)}%`)
    console.log(`tempo Ativo: ${tempoHora} hrs ${tempoMinuto} minu ${tempoativo} segu`)
}

function savelog ({sistema, arquitetura, procesadore,tempoHora,tempoMinuto,tempoativo,memoriaEmUso,memoriaTotal}){
    const log = `Sistesma Operacional ${sistema} Arquitetura ${arquitetura} | Procesador ${procesadore} | 
    Uso da memoria ${((memoriaEmUso / memoriaTotal) * 100).toFixed(2)}% | tempo Ativo: ${tempoHora} hrs ${tempoMinuto} minu ${tempoativo} segu)
    `
    const logDir = path.join ("/", "log")
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir)
    }

    const logPath = path.join(logDir,"log.txt")
    fs.appendFileSync(logPath, log)
}

setInterval(()=>{
    const systemInfo = ativarFuncao()
    Sistemasops(systemInfo)
    savelog(systemInfo)
},1000)
