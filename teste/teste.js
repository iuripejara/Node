

const cargaHoraria = 6.40

const horasTrabalhadas = [6.50,6.40,6.50,6.50,6.50,6.40,7.20,6.40,6.40,6.40,6.50,6.40,8.20,8.00,6.50,6.40,6.40,6.40,6.40,6.40,6.40,6.40,7.50,6.50,7.50,6.50]

let totaHorasExtras = 0

horasTrabalhadas.forEach(horas=>{
    const horasExtras = horas - cargaHoraria
    if (horasExtras > 0 ){
        totaHorasExtras += horasExtras
    }
})

console.log(`total de horas extras: ${totaHorasExtras}`)