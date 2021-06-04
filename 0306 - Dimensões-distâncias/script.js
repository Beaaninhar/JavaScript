console.log("Exercícios");

// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImg = document.querySelector("section img");
console.log(primeiraImg.offsetTop);

// Retorne a soma da largura de todas as imagens

const imagens = document.querySelectorAll("img");
let soma = 0;
function somaImagens() {
  imagens.forEach((img) => {
    soma += img.offsetWidth;
  });
  console.log(soma);
}

window.onload = () => {
  somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll("a");

links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;

  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log("Link ok");
  } else {
    console.log("Link não ok");
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
  const menu = document.querySelector(".menu");
  const mobile = window.matchMedia("(max-width: 720px)");

if ( mobile ) {
  menu.classList.add('menu-mobile');
}
