console.log("Exercícios");

// Retorne o url da página atual utilizando o objeto window
const url = window.location.href;

console.log(`Está é a url da página: ${url}`);


// Seleciona o primeiro elemento da página que
// possua a classe ativo

const classeAtivo = document.querySelector('.ativo');

console.log(`Elementro da classe ativo: ${classeAtivo}`)

// Retorne a linguagem do navegador
const linguagem = window.navigator.language;

console.log(`Linguagem do navegador: ${linguagem}`)

// Retorne a largura da janela

const largura = window.innerWidth;

console.log(`Largura: ${largura}`)
