function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(2));

function pi() {
  return 3.14;
}

var total = 5 * pi();

console.log(total);

function imc(peso, altura) {
  var imc = peso / altura ** altura;
  return imc;
}

console.log(">>>>>>", imc(58, 1.45));

function corFavorita(cor) {
  if (cor === "Azul") {
    return "Gosto do céu";
  } else if (cor === "Verde") {
    return "Gosto da grama";
  } else {
    return "Não tenho cor favorita";
  }
}

console.log(corFavorita("Azul"));

addEventListener("click", function () {
  console.log("Você clicou!");
});

function imc2(peso, altura) {
  const imc = peso / altura ** altura;
  console.log(">>>", imc);
}

imc2(58, 1.45);

function terceiraIdade(idade) {
  if (typeof idade !== 'number') {
    return "Inválido!";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade('Dois'));

function falataVisitar(paisesVisitados) {
  var totalPaises = 193;

  return `Falram visitar ${totalPaises - paisesVisitados} paises`
}

console.log(totalPaises); // error

var profissao = 'Programadora';

function dados() {
  var nome = 'Ana Beatriz';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Paraná';
    var idade = 21;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'Ana, 21, Paraná, Programadora'
// outrosDados(); // retorna um erro

