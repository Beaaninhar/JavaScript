const pessoa = {
  nome: "Ana",
  idade: 21,
  profissao: "Programadora",
};

console.log(pessoa.nome, pessoa.idade, pessoa.profissao);

const quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro: function (lado) {
    return this.lados * lado;
  },
  cinco() {
    return 5;
  },
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.random())

var height = 100;
var menu = {
  with: 800,
  height: 50,
  backgroundColor: '#84e',
  metadeHeight() {
    return height / 2;
  }
}

menu.backgroundColor = "#000"
menu.color = 'blue';

menu.esconder = function(){
  return 'esconder'
}

var bg = menu.backgroundColor;
