/* Exercício para definir se um 
   número é par ou ímpar, utilizando
   interpolação e operador ternário
*/
function avaliarNumero(x: number) {
    return (x%2 == 0);
}

let numero = 4;

console.log(`O número é ${avaliarNumero(numero) ? 'PAR' : 'ÍMPAR'}`);
