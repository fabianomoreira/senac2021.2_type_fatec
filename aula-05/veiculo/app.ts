import { Caminhao } from "./caminhao";
import { Moto } from "./moto";

let caminhao01: Caminhao;
let moto01: Moto;

caminhao01 = new Caminhao();
moto01 = new Moto();

caminhao01.cor = 'Vermelho';
caminhao01.modelo = 'Carga XT';
caminhao01.fabricante = 'Volvo';

moto01.cor = 'Verde';
moto01.modelo = 'ZX6R';
moto01.fabricante = 'Kawasaki';

console.log(`A moto ${moto01.modelo} está `);
moto01.acelerar(80);

console.log(`O caminhão ${caminhao01.modelo} está `);
caminhao01.descarregar();