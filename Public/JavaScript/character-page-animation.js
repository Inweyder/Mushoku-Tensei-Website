// character Page Animation

let box = document.querySelector("#character-page");

function changeClass() {
    box.firstElementChild.classList.remove("character-page__box--off");
    box.firstElementChild.classList.add("character-page__box");
}