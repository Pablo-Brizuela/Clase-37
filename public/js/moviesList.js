let elBody = document.querySelector("body")
let elH1 = document.querySelectorAll("h1")

let oscuro = prompt ("¿Desea modo oscuro?");

if(oscuro!=null){
    elBody.style.backgroundColor = "#7f7f7f​"
    elBody.classList.add("fondoMoviesList")
}

elH1.innerText +="LISTADO DE PELÍCULAS";
elH1.style.color = "white";
elH1.style.backgroundColor = "teal";
elH1.style.padding = "20px";
