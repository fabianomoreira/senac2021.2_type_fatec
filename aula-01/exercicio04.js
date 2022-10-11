var nome = 'Claudio';
var idade = 22;
var vezes = 5;

function validarIdade(){
    var mensagem;

    if(idade >=18){
        mensagem = 'Você pode votar!!!';
    } else {
        mensagem = 'Você não pode votar!';
    }

    return mensagem;
}

console.log('Olá, ' + nome);

for(i = 0; i < vezes; i++){
    console.log(validarIdade());
}