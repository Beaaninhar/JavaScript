const animais = document.getElementById("animais");
console.log(animais);

const gridSection = document.getElementsByClassName("grid-section");
console.log(gridSection);

const primeiraLi = document.querySelector("li");
console.log(primeiraLi);

const primeiraUl = document.querySelector("ul");
console.log(primeiraUl);

const linkInterno = document.querySelector('[href^="https://"]');
console.log(linkInterno);

const imgsAnimais = document.querySelectorAll(".animais img"); // Retorna nodeList
console.log(imgsAnimais);

const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNodeList = document.querySelectorAll(".grid-section");

primeiraUl.classList.add("grid-section");

console.log(gridSectionHTML); //Atualiza
console.log(gridSection); // Não atualiza

gridSectionNodeList.forEach(function (item) {
  console.log(item);
});

const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function (item) {
  console.log(item);
});
