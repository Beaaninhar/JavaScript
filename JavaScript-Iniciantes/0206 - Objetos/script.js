// Exercícios
console.log("Exercícios");

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

const dadosPessoais = {
  nome: "Ana Beatriz",
  sobrenome: "Ribeiro da Silva",
  faculdade: true,
  profissao: "Programadora",
};

// Crie um método no objeto anterior, que mostre o seu nome completo

dadosPessoais.nomeCompleto = function () {
  return `${dadosPessoais.nome} ${dadosPessoais.sobrenome}`;
};

console.log(dadosPessoais.nomeCompleto()); // Ana Beatriz Ribeiro da Silva

// Modifique o valor da propriedade preco para 3000

const motor = {
  marca: "Ford",
  cavalor: "300",
  preco: 3000,
};

motor.preco = 2500;
console.log(motor.preco); //2500

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

const cachorro = {
  raca: "Labrador",
  cor: "Preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa === "Homem") {
      return "Irá latir";
    } else {
      return 'Não irá latir'
    }
  },
};

console.log(cachorro.latir('Homem')); // Irá latir
