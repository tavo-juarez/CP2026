// Objetos_---------------------------------

let planes = [
  {
    nombre: "Concierto al aire libre",
    lugar: "playa de bogatell",
    precio: "10",
    categorita: "Musica",
    icono: "🪩",
    imagen: "img/concert.jpg",
    reservado: false,
  },
  {
    nombre: "Visita expo",
    lugar: "MACBA",
    precio: 0,
    categorita: "Arte",
    icono: "🫠",
    imagen: "img/museo.jpg",
    reservado: true,
  },
  {
    nombre: "Rafting",
    lugar: "Riu Vinalopó",
    precio: 22,
    categorita: "Deporte",
    icono: "🛶",
    imagen: "img/rafting.jpg",
    reservado: false,
  },
  {
    nombre: "Drag Show",
    lugar: "Strass",
    precio: 10,
    categorita: "Drag",
    icono: "👑",
    imagen: "img/drag.jpg",
    reservado: false,
  },
];
//------------------- Lista de planes--------------------

const listaPlanes = document.getElementById("listaPlanes");

for (let plan of planes) {
  let mensajeEstado;
  let claseEstado;
  if (plan.reservado === true) {
    mensajeEstado = "Ya está reservado";
    claseEstado = "reservado";
  } else {
    mensajeEstado = "Plan disponible";
    claseEstado = "disponible";
  }

  // el += añade el elemento a la lista sin omitir el anterior
  listaPlanes.innerHTML += `
   <article class='tarjeta'>
   <div class='contenedorImagen'>
   <img src=${plan.imagen} alt='${plan.nombre}'>
   
   <span class='icono'>${plan.icono}</span>
   </div>
   <div class='contenidoTarjeta'>
   <p class='categoria'>${plan.categoría}</p>
   <h2>${plan.nombre} ${plan.icono}</h2>
   <p>Lugar: ${plan.lugar}</p>
   <p>Precio: ${plan.precio}</p>
   <p>${mensajeEstado}</p>
   </div>
   </article>
   `;
}
