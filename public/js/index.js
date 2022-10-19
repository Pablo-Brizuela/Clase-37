let elMain = document.querySelector("main")
let elh2 = document.querySelector("h2")
let ela = document.querySelector("a")
let lap = document.querySelector("p")
let elBody = document.querySelector("body")
let nombre = prompt("Ingrese su Nombre")

elMain.style.display = "block"

if (confirm("¿Desea colocar un fondo de pantalla?")) {
    elBody.classList.add("fondo")
  }

if(!nombre){
    elh2.innerText("Invitado")
}
    else {
        elh2.innerText("nombre")
    }

elh2.style.textTransform = "uppercase"

ela.style.color = "#E51B3E"


if (confirm("¿Desea colocar un fondo de pantalla?")) {
    elBody.classList.add("fondo")
  }

