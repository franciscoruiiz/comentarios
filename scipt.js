//capturar los nodos necesarios para comentar
//por nodos me refiero a etiquetas html

const boton = document.querySelector(".boton")//document es todo mi html
const input = document.querySelector(".input")
const comentarios = document.querySelector(".comentarios")
//console.log("boton",boton) ver consola en el NODO

//crear funcion que se ejecute cuando le haga click al boton
function comentar() {
    
    //capturar el valor del input
    //agregar un comentario al div con clase comentario
    comentarios.innerHTML += `<p>${input.value}</p>`

}




