console.log('Exercícios');

// Retorne no console todas as imagens do site

const tdsImagens = document.querySelectorAll('img');
// console.log(tdsImagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imagem = document.querySelectorAll('img[src^="img/imagem"]');
// console.log(imagem);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
// console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const animaisDescricao = document.querySelector('.animais-descricao');
const section = animaisDescricao.querySelector('section');
const h2 = section.querySelector('h2');
console.log(h2);

// Selecione o último p do site
const p = document.querySelectorAll('p');
// console.log(p[p.length -1].innerText)

