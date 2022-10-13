enum Cor{
    Vermelho,
    Amarelo,
    Verde
}

let cor = 'Verde';

if (cor == 'verde'){
    console.log('Siga! Acelere!');
} else {
    console.log('Pane!');
}

console.log('Valor do enum : ');
console.log(Cor.Verde);

let corDoEnum: Cor;
corDoEnum = Cor.Verde;

console.log('Variável do tipo enum : ');
console.log(corDoEnum);
console.log(Cor[1]);

if (cor == Cor[2]){
    console.log('Siga! Acelere!');
} else {
    console.log('Pane!');
}