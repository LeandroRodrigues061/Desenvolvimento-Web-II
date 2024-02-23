/*console.log("Mensagem de texto");

var n1 = 10
var n2 = "String"

console.log(n1)*/




/*var n1 = 10
var n2 = 2

var total = n1 + n2

console.log(totoal)*/




/*var n1 = 2
var n2 = 4

var adicao = (n1 + n2)
var sub = (n1 - n2)
var mult = (n1 * n2)
var div = (n1 /  n2)

console.log("Adição: " + adicao)
console.log("Subtração: " + sub)
console.log("Multiplicação: " + mult)
console.log("Divisão: " + div)

if(adicao < sub){
    console.log("Subtração é maior que adição.");
}else{
    console.log("Adição é maior que Subtração.");
}

if (mult < div){
    console.log("Divisão é maior que multilplicação");
}else{
    console.log("Multiplicação é maior que divisão");
}*/


/*for(var n1=0; n1 <= 10; ++n1){
    console.log("N1: " + n1)
}*/




/*var n1 = 0;
while(n1 <= 10){
    console.log("N1: " + n1)
    n1++;
}*/



/*var n1 = 0
do{
    console.log("N1: " + n1)
    n1++
}while(n1 <= 10)*/


var adicao = require('./adicao')
var sub = require('./sub')
var multi = require('./multi')
var divisao = require('./div')


console.log(adicao(10,2))
console.log(sub(10,2))
console.log(multi(10,2))
console.log(divisao(10,2))