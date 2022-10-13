// uso da interporlação

let nome: string = 'Jorge';

console.log('O nome é ' + nome);
console.log(`O nome é ${nome}`);

let titulos = function(vezes: number): boolean{
    return vezes > 12;
}

let time = 'Flamengo';
let numeroDeTitulos = 4;

console.log(`Ter ${numeroDeTitulos} titulos não é suficiente para ultrapassar o ${time}`);

console.log(`Ter ${numeroDeTitulos} titulos não é suficiente para ultrapassar o ${time}? ${titulos(numeroDeTitulos) ? 'SIM': 'NÃO'}`);

// Função para dividir dois números

function dividir(n1: number, n2: number): number{
    return n1/n2;
}

console.log(`O resultado da divisão é ${dividir(5, 2)}`);