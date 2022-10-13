// Função utilizando valor padrão

function calcularSalario(salario: number, aumento: number = 5){
    return (((salario * aumento / 100) + salario));
}

console.log(`Seu novo salário é ${calcularSalario(1000)}`);