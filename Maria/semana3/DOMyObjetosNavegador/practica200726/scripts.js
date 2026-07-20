

let saludo = document.getElementById("saludo");
let btnNombre = document.getElementById("btnNombre");

let tamañoVentana = document.getElementById('tamañoVentana')

let idiomaNavegador = document.getElementById('idiomaNavegador')
idiomaNavegador.textContent = navigator.language

let estadoConexion = document.getElementById('estadoConexion')



let paginaActual = document.getElementById('paginaActual')
paginaActual.textContent = location.pathname

let btnTitulo = document.getElementById('btnTitulo')
let btnModo = document.getElementById('btnModo')



//---------------    listeners      ----------------------------------------

btnNombre.addEventListener("click", identificarUsuario);
window.addEventListener('resize', actualizarTamaño)
window.addEventListener('onLine', actualizarConexion)
window.addEventListener('offLine', actualizarConexion)
btnTitulo.addEventListener('click', cambiarTitulo)
btnModo.addEventListener('click', cambiarModo)


//---------------    Funciones      -----------------------------------------

function identificarUsuario() {
  // alert("hola");
  let nombre = prompt("Como te llamas?");
  if (nombre === null || nombre === "") {
    saludo.textContent = "Hola visitante";
  } else{
    saludo.textContent = `Hola ${nombre}`;
  }
}


function actualizarTamaño(){
  tamañoVentana.textContent = window.innerWidth + 'x' + window.innerHeight
}


function actualizarConexion(){
  if(navigator.onLine === true){
    estadoConexion.textContent = 'en linea'
  } else{
    estadoConexion.textContent = 'Sin conexion'
  }
}


function cambiarTitulo(){
  let nuevoTitulo = prompt('Escribe lo que quieras')
  if(nuevoTitulo !== null && nuevoTitulo !== ''){
    document.title = nuevoTitulo
  }
}


function cambiarModo(){
  document.body.classList.toggle('modoNocturno')
  if(document.body.classList.contains('modoNocturno')){
    btnModo.textContent = 'Modo claro'
  } else {
    btnModo.textContent = 'Modo oscuro'
  }
}



actualizarTamaño()
actualizarConexion()
