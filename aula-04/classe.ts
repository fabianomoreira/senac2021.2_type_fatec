class Laptop {
    tela: number;

    constructor(tela: number){
        this.tela = tela;
    }

    ligarMonitor(){
        console.log('O monitor foi ligado');
    }
}

let computador: Laptop;
let outro: Laptop;

computador = new Laptop(14);
outro = new Laptop(21);

computador.ligarMonitor();
console.log(`O tamanho da tela é de ${computador.tela} polegadas`);

console.log(`O tamanho da tela é de ${outro.tela} polegadas`);