const img = document.querySelector(".img");

// img.addEventListener("click", () => {
//   console.log("Clicou");
// });

// function callback() {
//   console.log("Clicou");
// }

// img.addEventListener("click", callback);

function callback(event) {
  // console.log(event);
}

img.addEventListener("click", callback);

const animaisLista = document.querySelectorAll(".animais-lista");
function callbackAnimais(e) {
  // console.log(e.currentTarget);
  // console.log(e.target);
  // console.log(e.type);
}

amimaisLista.addEventListener("click", callbackAnimais);

const linkExterno = document.querySelector('a[href^="http"]');

// function handleClickExterno(event) {
//   event.preventDefault();
//   console.log(event.currentTarget.href);
// }

function handleClickExterno(event) {
  // console.log(this);
  // console.log(this.getAttribute('href'));
}

linkExterno.addEventListener("click", handleClickExterno);

const h1 = document.querySelector("h1");

function handleEvent(event) {
  if (event.key === "a") {
    document.body.classList.toggle("azul");
  } else if (event.key === "v") {
    document.body.classList.toggle("vermelho");
  }
}

// h1.addEventListener('click', handleEvent);
// h1.addEventListener('mouseenter', handleEvent);
// h1.addEventListener('mousemove', handleEvent);

// window.addEventListener('scroll', handleEvent);
// window.addEventListener('resize', handleEvent);
// window.addEventListener("keydown", handleEvent);


const imgs = document.querySelectorAll('img');

function handleImg(event) {
  const src = event.currentTarget.getAttribute('src');
  console.log(src);
}

imgs.forEach((img) => {
  img.addEventListener('click', handleImg);
});
