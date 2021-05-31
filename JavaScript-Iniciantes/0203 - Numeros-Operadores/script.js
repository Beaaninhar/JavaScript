var idade = 21;
var exp = 2e10;
var exp2 = 2e-2;
var pi = 3.14; // ponto para decimal

var soma = 100 + 50;
var subtracao = 100 - 50;
var multiplicacao = 100 * 2;
var divisao = 100 / 2;
var expoente = 2 ** 4;
var modulo = 14 % 5;

var soma = "100" + 50;
var subtracao = "100" - 50;
var multiplicacao = "100" * "2";
var divisao = "Comprei 10" / 2;

var numero = 80;
var unidade = "kg";
var peso = numero + unidade;
var pesoPorDois = peso / 2; // NaN (Not a Number)

var total1 = 20 + 5 * 2; 
var total2 = (20 + 5) * 2;
var total3 = (20 / 2) * 5;
var total4 = 10 + 10 * 2 + 20 / 2;

var incremento = 5;
console.log(incremento++);
console.log(++incremento);
console.log(incremento);

var incremento2 = 5;
console.log(--incremento2);
console.log(incremento2--);

var idade = "28";
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33

// EXERCÍCIO
console.log("EXERCÍCIO");

// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20;
console.log(total); //35

// Crie duas expressões que retornem NaN
let altura = 1.5
let metros = 'metros';
let alturaMetros = altura / metros
console.log(alturaMetros); //NaN

let pesoDividido = 'Oitenta' / 2
console.log(pesoDividido); //Nan

// Somar a string '200' com o número 50 e retornar 250
let somar = +'200' + 50;
console.log(somar); // 250

// Incremente o número 5 e retorne o seu valor incrementado
let incrementarCinco = 5;
++incrementarCinco;
console.log(incrementarCinco); // 6

// Como dividir o peso por 2?
var numero =  +"80" / 2;
var unidade = "kg";
var peso = numero + unidade; // '80kg'
var pesoPorDois = numero 

console.log(`${pesoPorDois}${unidade}`) // "40kg"