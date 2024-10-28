import fs from "node:fs";

export function createFile(text) {
    return new Promise((resolve,rejects)=>{
        fs.writeFile("batata.txt", text, "utf8", (err) => {
            if (err) {
                rejects("Erro ao escrever o arquivo:", err.message);
            }else{
                resolve()
            }
        });
    })
    
}

export function showFile() {
    return new Promise((resolve, rejects)=>{
        fs.readFile("batata.txt", "utf8", (err, text) => {
            if (err) {
                rejects("Erro ao ler o arquivo:", err.message);
            } else {
                resolve();
            }
        });
    })
    
}

export function newFile(newText) {
    return new Promise ((resolve, rejects)=>{
        fs.writeFile("batata.txt", newText, "utf8", (err) => {
            if (err) {
                rejects("Erro ao escrever o arquivo:", err.message);
            }else{
                resolve()
            }
        });
    })
    
}

export function deleteFile() {
    return new Promise ((resolve, rejects)=>{
        fs.unlink("batata.txt", (err) => {
            if (err) {
                rejects("Erro ao apagar o arquivo:", err.message);
                resolve()
            } else {
                console.log("Arquivo apagado com sucesso");
                resolve()
            }
        });
    })
}