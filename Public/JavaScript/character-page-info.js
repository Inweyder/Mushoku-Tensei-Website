
let body = document.querySelector(".character-page__body");
let info = document.querySelector(".character-page__info");

let intervalInfo = setInterval(function() { body.getBoundingClientRect().top <=200 ? infoOn() : null}, 1000/60);

function infoOn() {
    info.setAttribute("style", "transform: translateY(-100vh);");
    console.log("1");
}

let intervalInfoOff = setInterval(function() { body.getBoundingClientRect().top >=200 ? infoOff() : null}, 1000/60);
function infoOff(){
    info.setAttribute("style", "transform: translateY(-120vh);");
    console.log("2");
}

