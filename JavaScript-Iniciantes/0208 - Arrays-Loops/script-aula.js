var sobremesas = ["musse", "chocolete", "bolo", "sonho"];

var adicionarItem = sobremesas.push("Torta doce");

sobremesas.forEach(function (fruta, index, array) {
  console.log(fruta, index, array);
});

// for (var numero = 0; numero <= 10; numero++) {
//   console.log(numero);
// }

// var i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// for (var i = 0; i < sobremesas.length; i++) {
//   console.log(sobremesas[i]);
// }

// for (var i = 0; i < sobremesas.length; i++) {
//   console.log(sobremesas[i]);
//   if (sobremesas[i] === "bolo"){
//     break;
//   }
// }

// var frutas = ["Maça", "Banana", "Abacaxi", "Pera", "Larança"];
// frutas.forEach(function (fruta, index, array) {
//   console.log(fruta, index, array);
// });

// NÃO ACONSELHÁVEL
// var numero = 0;
// var maximo = 50;
// for (; numero < maximo; ) {
//   console.log(numero);
//   numero++;
// }
