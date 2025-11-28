

function cambiarcolor(elemento) {
    elemento.style.color ="red" ;
}

function restaurarcolor(elemento) {
    elemento.style.color = "blue" ;
}

function cambiarcolorDeDiv(elemento) {
    elemento.style.background-color ="grey" ;
}

function restaurarcolorDeDiv(elemento) {
    elemento.style.background-color = "white" ;
}
const div = document.getElementById("divs");
const titulo = document.getElementById("titulo");  /*la constante busca en el documento,
 el elemento por el id, en este caso el que se llama titulo */ 
//const parrafo = document.getElementById("parrafo");
div.addEventListener("mouseover", function() {
    cambiarcolorDeDiv(div);
  });
titulo.addEventListener("mouseout", function() {
    restaurarcolorDeDiv(div);

});

titulo.addEventListener("mouseover", function() {
    cambiarcolor(titulo);

});

titulo.addEventListener("mouseout", function() {
    restaurarcolor(titulo);

});






