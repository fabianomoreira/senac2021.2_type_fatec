export class Laptop {
    tela: number;

    constructor(tela: number){
        this.tela = tela;
    }

    ligarMonitor(){
        console.log('O monitor foi ligado');
    }
}