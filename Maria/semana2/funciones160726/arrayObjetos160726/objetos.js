// Objetos_---------------------------------

let planes = [
  {
    nombre: "Concierto al aire libre",
    lugar: "playa de bogatell",
    precio: "10",
    categoria: "Musica",
    icono: "🪩",
    imagen: "img/concert.jpg",
    reservado: false,
  },
  {
    nombre: "Visita expo",
    lugar: "MACBA",
    precio: 0,
    categoria: "Arte",
    icono: "🫠",
    imagen: "img/museo.jpg",
    reservado: true,
  },
  {
    nombre: "Rafting",
    lugar: "Riu Vinalopó",
    precio: 22,
    categoria: "Deporte",
    icono: "🛶",
    imagen: "img/rafting.jpg",
    reservado: false,
  },
  {
    nombre: "Drag Show",
    lugar: "Strass",
    precio: 10,
    categoria: "Drag",
    icono: "👑",
    imagen: "img/drag.jpg",
    reservado: false,
  },
];
//------------------- Lista de planes--------------------

const listaPlanes = document.getElementById("listaPlanes");

function mostrarPlanes() {
  listaPlanes.innerHTML = "";

  for (let i = 0; i < planes.length; i++) {
    // for (let plan of planes)
    let plan = planes[i]; //necesito esta variable al haber cambiado la definicion de bucle
    let mensajeEstado;
    let claseEstado;
    if (plan.reservado === true) {
      mensajeEstado = "Ya está reservado";
      claseEstado = "reservado";
    } else {
      mensajeEstado = "Plan disponible";
      claseEstado = "disponible";
    }

    //Poner "Gratis" cuando el precio es 0
    let textoPrecio;
    if (plan.precio === 0) {
      textoPrecio = "Gratis";
    } else {
      textoPrecio = `${plan.precio} €`;
    }

    // el += añade el elemento a la lista sin omitir el anterior
    listaPlanes.innerHTML += `
   <article class='tarjeta'>
   <div class='contenedorImagen'>
   <img src=${plan.imagen} alt='${plan.nombre}'>
   
   <span class='icono'>${plan.icono}</span>
   </div>

   <div class='contenidoTarjeta'>
   <p class='categoria'>${plan.categoria}</p>
   <h2>${plan.nombre} ${plan.icono}</h2>
   <p>Lugar: ${plan.lugar}</p>
   <p>Precio: ${textoPrecio}</p>
   <p class='estado ${claseEstado}' >${mensajeEstado}</p>
   </div>
   <button class='btnReservar' data-indice='${i}'>Cambiar reserva</button> 
   </article>
   `;
  }
  let botonesReservar = document.querySelectorAll(".btnReservar");

  for (let boton of botonesReservar) {
    boton.addEventListener("click", cambiarReserva)
    }


    function cambiarReserva(ev){
      // target.dataset identificamos nuestro atributo personalizado
let indice = ev.target.dataset.indice // indice es mi atributo persolalizado
//console.log(indice)
planes[indice].reservado = !planes[indice].resrvado
mostrarPlanes()
    }
}


// "Push"   agrega un nuevo elemento en el array de planes en ultima posicion
planes.push({
  nombre: "Beer Pong",
  lugar: "Playa",
  precio: "Lo que cueste",
  categoria: "Deporte",
  icono: "🍺",
  imagen: "img/beerPong.jpg",
  reservado: true,
});

mostrarPlanes();
