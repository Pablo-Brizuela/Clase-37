let elMain = document.querySelector("main")
let elh2 = document.querySelector("h2")
let ela = document.querySelector("a")
let lap = document.querySelector("p")

let nombre = window.prompt("Ingrese su Nombre")

if(!nombre){
    elh2.innerText("Invitado")
}
    else {
        elh2.innerText("nombre")
    }

elh2.style.textTransform = uppercase

ela.style.color = "#E51B3E"
