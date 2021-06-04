const listaAnimais = document.querySelector(".animais-lista");
const tamanhoScroll = listaAnimais.scrollHeight;

// console.log(tamanhoScroll);

const animaisTop = listaAnimais.offsetTop;
// console.log(animaisTop);

const raposah2 = document.querySelector("h2");
const raposaLeft = raposah2.offsetLeft;

// console.log(raposaLeft);

const recth2 = raposah2.getBoundingClientRect();

// console.log(recth2.height);

// if (recth2.top < 0) {
//   console.log('Passou do elemento');
// }

// console.log(
//   window.innerWidth,
//   window.innerHeight,
//   window.outerWidth,
//   window.outerHeight,
//   window.pageXOffset,
//   window.pageYOffset
// );

// if ( window.innerWidth < 600 ) {
//   console.log('Tela menor que 600px');
// }

const small = window.matchMedia("(max-width: 600px)");

if (small.matches) {
  console.log("Tela menor que 600px");
} else {
  console.log("Tela maior que 600px");
}
