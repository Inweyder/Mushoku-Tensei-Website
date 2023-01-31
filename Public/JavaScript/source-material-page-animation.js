// Source Material Page Animation

let boxSourceMaterial = document.querySelector("#source-material-page");

boxSourceMaterial.firstElementChild.classList.remove("source-material-page__box");
boxSourceMaterial.firstElementChild.classList.add("source-material-page__box--off");

let intervalSourceMaterial = setInterval(function() { boxSourceMaterial.getBoundingClientRect().top <=100 ? changeSourceMaterialClass() : null}, 1000/60);

function changeSourceMaterialClass() {
    boxSourceMaterial.firstElementChild.classList.remove("source-material-page__box--off");
    boxSourceMaterial.firstElementChild.classList.add("source-material-page__box");
    clearInterval(intervalSourceMaterial);

}