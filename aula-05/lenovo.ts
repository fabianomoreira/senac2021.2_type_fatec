import { Laptop } from "./laptop";

export class LeNovo extends Laptop{
    constructor(){
        super(12);
    }

    aumentarBrilho(valor: number){
        console.log(`Aumentou o brilho em ${valor} pontos.`);
    }
}