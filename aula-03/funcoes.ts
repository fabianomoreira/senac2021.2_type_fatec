function qualNome(nome: string): void {
    console.log('Você passou o nome ' + nome);
}

function somar(n1: number, n2: number): number {
    return (n1 + n2);
}

let numeroMaior = function(valor: number): boolean {
    return valor > 10;
}

function exibir(nome: string, idade?: number): void{
    let i = idade || 0;

    console.log('O nome é ' + nome + 'e a idade é ' + i);
}

let multiplicar = (n1: number, n2: number) => {
    return n1 * n2;
}

let numeros: Array<number> = [5, 1, 12, 20];

function listar(x: Array<number): void{
    for(let i = 0; i < x.length; i++){
        console.log(x[i]);
    }
}


qualNome('Antônio');
console.log(somar(4, 8));
console.log(numeroMaior(12));

exibir('Joaquim');

console.log(multiplicar(5, 7));

console.log(numeros);
listar(numeros);

numeros.forEach((x) => {
    console.log('Valor Original : ' + x);
    console.log('Valor Alterado : ' + (x * 5));
});

console.log('Numeros antes da ordenação : ');
console.log(numeros);
numeros.sort();
console.log('Numeros depois da ordenação : ');
console.log(numeros);

function maior(n1: number, n2: number): number{
    let resultado = n1 - n2;

    return resultado;
}

console.log(maior(1, 5));