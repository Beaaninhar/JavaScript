var possuiFaculdade = true;
var possuiDoutorados = true;

if (possuiFaculdade) {
  console.log("Possui faculdade");
  var x = 20;
} else if (possuiDoutorados) {
  console.log("Possui Doutorado");
} else {
  console.log("Não possui nada");
}

console.log(x);

const nome = "";
if (nome) {
  console.log(nome);
} else {
  console.log("Nome não existe!");
}

// Outros valores que retornam false
/*
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('')  // ou "" ou ``
*/

// Todo o resto é truthy

// Exemplos de truthy
// Truthy
/*
if(true)
if(1)
if(' ')
if('andre')
if(-5)
if({})
*/

if (!possuiDoutorados) {
  console.log(possuiDoutorados);
  console.log("Não possui");
}

20 > 5; // true
5 > 20; // false
20 < 20; // false
20 <= 20; // true
20 >= 11; // false

var x = 20;

console.log(x === "20");
console.log(x === 20);
console.log(x !== 20);

var gatinho = "Gato";

console.log(gatinho === "gato");
console.log(gatinho === "Gato");
console.log(gatinho !== "Gato");

if (5 - 5 && 5 + 5) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

if (5 - 20 && 5 + 5) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}

var condicional1 = 5 - 1 && 5 + 5;
if (condicional1) {
  console.log("Vdd", condicional1);
} else {
  console.log("Falso");
}

var condicional2 = 5 - 5 || 5 + 5 || 20 - 2;
console.log(condicional2);

var corFavorita = "Verde";

switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu");
    break;
  case "Verde":
    console.log("Olha para grama");
  case "Amarelo":
    console.log("Olhe para os girassois");
}

// ********************************************

// EXERCÍCIO
console.log("EXERCÍCIO");

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
let minhaIdade = 21;
let idadeIrma = 38;

if (minhaIdade === idadeIrma) {
  console.log("É igual");
} else if (minhaIdade > idadeIrma) {
  console.log("É maior");
} else {
  console.log("É menor");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre";
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(
  !!nome,
  !!idade,
  !!possuiDoutorado,
  !!!empregoFuturo,
  !!dinheiroNaConta
);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("Br maior que China");
} else {
  console.log("China maior que BR");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
} // Falso

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão");
} else {
  console.log("Falso");
} // Cão


const verdadeiro = !false;
const falso = !false;


20 == '20'; // true
20 == 20; // true
20 === '20'; // false
20 === 20 // true
20 != 25 // true
20 != '20' // false
20 !== '20' // true


true && true; // true
true && false; // false
false && true; // false
'Formiga' && 'Tamanduá'; // 'Tamanduá'
(5 - 5) && (5 + 5); // 0
'Tamanduá' && false; // false
(6 >= 6) && (4 < 7); // true


true || true; // true
true || false; // true
false || true; // true
'Formiga' && 'Tamanduá';// 'Formiga'
(5 - 5) || (5 + 5); // 10
'Formiga' || false; // Formiga
(6 >= 6) || (4 < 7); // true