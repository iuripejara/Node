const cargaHoraria = 6.40;

const horasTrabalhadas = [
    { segunda: [6.40, 6.50, 6.40, 7.50] },
    { terca: [6.50, 7.20 , 6.40, 6.50] },
    { quarta: [6.40, 6.40, 8.20, 6.40 ,7.50] },
    { quinta: [6.50, 6.40, 8.00, 6.40, 6.50] },
    { sexta: [6.50, 6.50, 6.40] },
    { sabado: [6.50, 6.40] },
    { domingo: [6.40, 6.40] }
];

let totalHorasTrabalhadas = 0;
let totalHorasExtras = 0;

horasTrabalhadas.forEach(dia => {
    // Obtemos o array de horas trabalhadas para cada dia
    const horasDoDia = Object.values(dia)[0];

    // Somamos as horas trabalhadas no dia
    const totalHorasDia = horasDoDia.reduce((acc, horas) => acc + horas, 0);
    totalHorasTrabalhadas += totalHorasDia;

    // Calculamos as horas extras se ultrapassar a carga horária
    const horasExtras = totalHorasDia - cargaHoraria;
    if (horasExtras > 0) {
        totalHorasExtras += horasExtras;
    }
});

console.log(`Total de horas trabalhadas: ${totalHorasTrabalhadas.toFixed(2)} horas`);
console.log(`Total de horas extras: ${totalHorasExtras.toFixed(2)} horas`);
