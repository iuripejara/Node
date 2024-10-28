
import { createFile,showFile,newFile,deleteFile } from "./main.mjs";

async function Start() {
    await createFile("Aqui vai começar uma história de luta e sofrimento, mas ele vai ganhar essa batalha.");
    await showFile();

    console.log("*-----------*");

    await newFile("Com muitas batalhas com grandes dragões e pessoas horríveis.");
    await showFile();

    console.log("*-----------*");

    await deleteFile();
}
Start()

