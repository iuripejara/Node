
function verificadorDeVogais(letras) {
    let Vogais = prompt ("Insira as vogais").toLowerCase()
    let contador = 0
    const verdadeirasVogais ="aeiou"
    
    for (let i = 0; i < Vogais.length; i++) {
        
       if (!verdadeirasVogais.includes(Vogais[i])) {
            alert(`${Vogais} nao é vogais`)
            return 0
       }
    }
    
    for (let i = 0; i < letras.length; i++) {
        
        if (Vogais.includes(letras[i].toLowerCase())) {
            contador++
        }
    }
    return contador
}

const recebePalavras = prompt("insira uma palavra")
console.log(verificadorDeVogais(recebePalavras))