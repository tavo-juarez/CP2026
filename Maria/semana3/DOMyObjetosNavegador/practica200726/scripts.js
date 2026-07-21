let saludo = document.getElementById("saludo");
let btnNombre = document.getElementById("btnNombre");

let tamañoVentana = document.getElementById("tamañoVentana");

let idiomaNavegador = document.getElementById("idiomaNavegador");
idiomaNavegador.textContent = navigator.language;

let estadoConexion = document.getElementById("estadoConexion");

let paginaActual = document.getElementById("paginaActual");
paginaActual.textContent = location.pathname;

let btnTitulo = document.getElementById("btnTitulo");
let btnModo = document.getElementById("btnModo");

//cargamos de forma dinamica por JavaScript
let campoMensaje = document.getElementById("campoMensaje");
let btnAñadir = document.getElementById("btnAñadir");
let contadorMensajes = document.getElementById("contadorMensajes");
let listaMensajes = document.querySelector(".listaMensajes");

let mensajes = ["Repasar la clase", "Revisar proyecto"];

let notificacion = document.getElementById('notificaciones')

//---------------    listeners      ----------------------------------------

btnNombre.addEventListener("click", identificarUsuario);

window.addEventListener("resize", actualizarTamaño);

window.addEventListener("onLine", actualizarConexion);

window.addEventListener("offLine", actualizarConexion);

btnTitulo.addEventListener("click", cambiarTitulo);

btnModo.addEventListener("click", cambiarModo);

btnAñadir.addEventListener("click", añadirMensaje);

campoMensaje.addEventListener("keydown", comprobarTecla);

//---------------    Funciones      -----------------------------------------

function identificarUsuario() {
  // alert("hola");
  let nombre = prompt("Como te llamas?");
  if (nombre === null || nombre === "") {
    saludo.textContent = "Hola visitante";
  } else {
    saludo.textContent = `Hola ${nombre}`;
  }
}


function actualizarTamaño() {
  tamañoVentana.textContent = window.innerWidth + "x" + window.innerHeight;
}


function actualizarConexion() {
  if (navigator.onLine === true) {
    estadoConexion.textContent = "en linea";
  } else {
    estadoConexion.textContent = "Sin conexion";
  }
}


function cambiarTitulo() {
  let nuevoTitulo = prompt("Escribe lo que quieras");
  if (nuevoTitulo !== null && nuevoTitulo !== "") {
    document.title = nuevoTitulo;
  }
}


function cambiarModo() {
  document.body.classList.toggle("modoNocturno");
  if (document.body.classList.contains("modoNocturno")) {
    btnModo.textContent = "Modo claro";
  } else {
    btnModo.textContent = "Modo oscuro";
  }
}


function mostrarMensajes() {
  listaMensajes.innerHTML = "";

  //recorremos el array con un bucle para agragar cada vez el mensaje nuevo
  // for (let mensaje of mensajes)
  for (let i = 0; i < mensajes.length; i++) {
    let mensaje = mensajes[i];

    listaMensajes.innerHTML +=  //  += para añadir cada vez y no sustituir con =
      
      `<article class='mensaje'>
    <p>${mensaje}</p>
    <button class='btnEliminar' data-indice='${i}'>Eliminar</button> 
    </article>`;
  }

  let botonesEliminar = document.querySelectorAll(".btnEliminar");
  for (let boton of botonesEliminar) {
    boton.addEventListener("click", eliminarMensaje);
  }

  //actualizo el contador de mensajes aqui porque es la funcion que recoje el bucle
  if (mensajes.length === 1) {
    contadorMensajes.textContent = "1 mensaje";
  } else {
    contadorMensajes.textContent = mensajes.length + "mensajes";
  }
}


function añadirMensaje() {
  //sacar texto del input
  let texto = campoMensaje.value;

  //validamos que no este vacio
  if (texto === "") {
    alert("Escribe algo");
  } else {
    //icorporamos mensaje al array
    mensajes.push(texto);

    //limpiar el input una vez se agraga el mensaje
    campoMensaje.value = "";
  }

  mostrarMensajes();
}


//necesito pasarle una accion    "evento"
function comprobarTecla(evento) {
  if (evento.key === "Enter") {
    añadirMensaje();
  }
}


//necesito pasarle una accion    "evento"
function eliminarMensaje(evento) {
  let indice = evento.target.dataset.indice;

  let confirmar = confirm('Estas seguro de eliminar este mensaje?')

  if(confirmar === true)
  mensajes.splice(indice, 1);
  mostrarMensajes();
}


function mostrarNoticicaciones(texto){
  notificacion.textContent = texto
}

//---------------    Llamadas      -----------------------------------------

actualizarTamaño();
actualizarConexion();
mostrarMensajes();
