import { Ibm } from "./ibm";
import { Laptop } from "./laptop";
import { LeNovo } from "./lenovo";

let computador: Laptop;
let outro: Laptop;

computador = new Laptop(14);
outro = new Laptop(21);

computador.ligarMonitor();
console.log(`O tamanho da tela é de ${computador.tela} polegadas`);

console.log(`O tamanho da tela é de ${outro.tela} polegadas`);

let lenovo: LeNovo;

lenovo = new LeNovo();

lenovo.ligarMonitor();
lenovo.aumentarBrilho(4);

let ibm: Ibm;

ibm = new Ibm(12);

ibm.memoriaDeVideo = 512;

ibm.ligarMonitor();

console.log(`Meu laptop tem ${ibm.memoriaDeVideo} de memória de vídeo`);
