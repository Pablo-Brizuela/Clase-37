let elMain = document.querySelector("main")
let elh2 = document.querySelector("h2")
let ela = document.querySelector("a")
let lap = document.querySelectorAll("p")
let elBody = document.querySelector("body")

let nombre = prompt("Ingrese su Nombre")




if(!nombre){
    elh2.innerText += " Invitado"
}
    else {
        elh2.innerHTML += nombre
    }

elh2.style.textTransform = "uppercase"

ela.style.color = "#E51B3E"

let confirmacion = confirm("¿Desea colocar un fondo de pantalla?")
if (confirmacion) {
    elBody.classList.add("fondo")
  }

  for (let i = 0 ; i < lap.length; i++){
    if (i %2==0){
       lap[i].classList.add("destacadoPar")       
    } 
        else {
            lap[i].classList.add("destacadoImpar")
    }
}
    elMain.style.display = "block"

    