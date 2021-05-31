// Exercícios
console.log("Exercícios");
// Crie uma função para verificar se um valor é Truthy

function verificarValor(valor) {
  return console.log(!!valor);
}

verificarValor(0); // false

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(lado) {
  return lado + lado + lado + lado;
}

console.log(perimetro(4)); // 16

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto("Ana", "Beatriz Ribeiro")); // Ana Beatriz Ribeiro

// Crie uma função que verifica se um número é par

function par(numero) {
  if (numero % 2 === 0) {
    return "É par";
  } else {
    return "É ímpar";
  }
}

console.log(par(2)); // É par

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDeDado(dado){
  return typeof dado
}

console.log(tipoDeDado({})); // object

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function() {
  return console.log( 'Ana Beatriz Ribeiro da Silva'); // Ana Beatriz Ribeiro da Silva
})

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);



const funcaoAnonima1 = function() {console.log('Ana Beatriz')};
const funcaoAnonima2= () =>  {console.log('Ana Beatriz')};