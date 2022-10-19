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
    elh2.innerText += " Invitado"
}
    else {
        elh2.innerHTML += "Nombre"
    }

elh2.style.textTransform = "uppercase"

ela.style.color = "#E51B3E"



  for (let i = 0; i > lap.length; i++) {
    if (lap[i] %2==0){
       lap[i].classList.add("descatadoPar")       
    } 
        else lap[i].classList.add("destacadoImpar")
    }
