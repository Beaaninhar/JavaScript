var nome = 'Ana'

console.log(nome.toLocaleLowerCase());
console.log(nome.toLocaleUpperCase());

const n = 11.5

console.log(n.toFixed(2)); //11.50


function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado.toString());
// "function areaQuadrado(lado) {
//  return lado * lado;
// }"

console.log(areaQuadrado.length); // 1


var btn = document.querySelector('.btn');

btn.classList.add('azul') // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function() {
  console.log('Clicou')
})

