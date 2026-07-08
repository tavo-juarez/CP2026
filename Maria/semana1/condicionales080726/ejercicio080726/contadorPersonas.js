// Declaracion de variables (o todo lo que haya que declarar):

// con la linea 4 estamos identidicando nuestro h2 (que tiene un cero (ahora))
const contador = document.querySelector("#contador");

// con la linea 7 estamos identidicando nuestro h3
const mensaje = document.getElementById("mensaje");

// en las lineas 4 y 7, identificamos nuestro elemento de dos formas distintas,
// de las dos formas puedo identificar el elemento, no es mejor una que otra,
// solo dos opciones

//----------------Botones----------------

const btnEntrada = document.getElementById("btn-entrada");
const btnSalida = document.getElementById("btn-salida");
const btnReset = document.querySelector("#btn-reset");

// otras variables

const max = 10; // maximo personas
const min = 0; // luego vemos

// estado
let personas = 0; // luego vemos

// listeners:
btnEntrada.addEventListener("click", incre);
btnSalida.addEventListener("click", decre);
btnReset.addEventListener('click', reset)

function incre() {
  // si personas es menor que 10 sigue sumando 1 (que seria: personas++)

  // personas++     el ++ significa incremento de 1 / esta linea es la que actualiza el valor,
  // que al haber hecho el primer click ya no es 0 sino que es 1
  if (personas < max) {
    personas++; // personas = personas + 1  esto seria lo mismo que la linea 33
    contador.innerHTML = personas;
    if (personas >= 7 && personas < max) {
      mensaje.innerHTML = "casi lleno";
      mensaje.classList.add("naranja");
      contador.style.color = "orange";
    }
    if (personas === max) {
      mensaje.innerHTML = "completo";
      mensaje.classList.remove("naranja");
      mensaje.classList.add("rojo");
      contador.style.color = "red";
    }
  }
}

function decre() {
  if (personas > min) {
    personas--;
    contador.innerHTML = personas;
    if(personas >= 7 && personas < max){
      mensaje.innerHTML = 'casi lleno'
      mensaje.classList.add('naranja')
      contador.style.color = 'orange'

    }else{
      mensaje.classList.remove('naranja')
      mensaje.innerHTML = ''
      contador.style.color = 'black'

    }
  }
}


function reset(){
  personas = 0
  contador.innerHTML = personas
  contador.style.color = 'black'
  mensaje.innerHTML = ''
}