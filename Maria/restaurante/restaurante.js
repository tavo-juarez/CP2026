const menu = [
  //----------------Bebidas Vampiros-----------
  {
    id: 1,
    cliente: "vampiro",
    precio: 15,
    tipo: ["AB-", "B-", "AB+"],
    rareza: "alta",
    ingrediente: ["sangre"],
    nombre: "Sangre Dorada",
  },
  {
    id: 2,
    cliente: "vampiro",
    precio: 10,
    tipo: ["A-", "O-", "B+"],
    rareza: "intermedia",
    ingrediente: ["sangre"],
    nombre: "Sangre Plateada",
  },
  {
    id: 3,
    cliente: "vampiro",
    precio: 7.5,
    tipo: ["A+", "O+"],
    rareza: "baja",
    ingrediente: ["sangre"],
    nombre: "Sangre Simple",
  },
  {
    id: 4,
    cliente: "vampiro",
    precio: 35,
    tipo: ["Rh"],
    rareza: "Muy alta",
    ingrediente: ["sangre"],
    nombre: "Sangre de Cristal",
  },

  //----------------Bebidas Angeles-----------

  {
    id: 5,
    cliente: "angel",
    precio: 10,
    tipo: ["Alegre", "Empaticx", "Divertidx"],
    rareza: "alta",
    ingrediente: ["Espiritu"],
    nombre: "Alma Dorada",
  },
  {
    id: 6,
    cliente: "angel",
    precio: 10,
    tipo: ["Neutral", "Sencillx", "Amigable"],
    rareza: "intermedia",
    ingrediente: ["Espiritu"],
    nombre: "Alma Plateada",
  },
  {
    id: 7,
    cliente: "angel",
    precio: 10,
    tipo: ["Pretenciosx", "Simple", "Egoista"],
    rareza: "baja",
    ingrediente: ["Espiritu"],
    nombre: "Alma de facha",
  },
  {
    id: 8,
    cliente: "angel",
    precio: 10,
    tipo: ["Alegre", "Empaticx", "Divertidx", "Resilient", "Criticx"],
    rareza: "alta",
    ingrediente: ["Alegre", "Empaticx", "Divertidx", "Resilient"],
    nombre: "Alma Humana",
  },
];

let angels = document.getElementById("angels");
let vampiros = document.getElementById("vampiros");

let btnVampiro = document.getElementById("btnVampiro");
let btnAngel = document.getElementById("btnAngel");

let tituloVampi = document.querySelector(".tituloVampi");
let tituloAngel = document.querySelector(".tituloAngel");

let bebidasVampiros = document.querySelector(".bebidasVampiros");
let bebidasAngeles = document.querySelector(".bebidasAngeles");

let pedidoVampiros = document.getElementById("pedidoVampiros");
let pedidoAngels = document.getElementById("pedidoAngels");

const reset = document.getElementById("reset");


let pedido = [];

//Para poder saber cantidad pedida por bebida

//Vampiros
const contadorSangreDorada = 0
const contadorSangrePlateada = 0
const contadorSangreSimple = 0
const contadorSangreCristal = 0

//Angeles
const contadorAlmaPlateada = 0
const contadorAlmaHumana = 0
const contadorAlmaFacha = 0
const contadorAlmaDorada = 0

//-------------------------------------Funciones---------------------------

// Filtrar creatura
btnVampiro.addEventListener("click", () => {
  // 1. Cambio el aspecto de la página
  angels.classList.add("inactivo");
  vampiros.classList.remove("inactivo");

  // 2. Muestro el menú correspondiente
  mostrarMenu("vampiro");

  // 3. Actualizo el estado de los botones
  btnVampiro.disabled = true;
  btnAngel.disabled = false;
});


btnAngel.addEventListener("click", () => {
  // 1. Cambio el aspecto de la página
  vampiros.classList.add("inactivo");
  angels.classList.remove("inactivo");

  // 2. Muestro el menú correspondiente
  mostrarMenu("angel");

  // 3. Actualizo el estado de los botones
  btnAngel.disabled = true;
  btnVampiro.disabled = false;
});


//Reset from title
reset.addEventListener("click", limpiar);

function limpiar() {
  window.location.reload();
}


// Filtrar menu
function mostrarMenu(cliente) {
  //Limpio/vacio los titulos H1
  tituloVampi.innerHTML = "";
  tituloAngel.innerHTML = "";

  //vuelvo a vaciar el contenedor de las bebidas
  bebidasVampiros.innerHTML = "";
  bebidasAngeles.innerHTML = "";

  for (let i = 0; i < menu.length; i++) {
    if (menu[i].cliente === cliente) {
      // console.log(menu[i].nombre)

      if (cliente === "vampiro") {
        tituloVampi.innerHTML = `<span class='vampi'>Menu Vampiros</span>`;

        bebidasVampiros.innerHTML += `<div class="bebida" id="bebida">

          <H2 class='titulo'>${menu[i].nombre}</H2>
          <p>Precio: ${menu[i].precio} €</p>
          <p>Rareza: ${menu[i].rareza}</p>
          <p>Puede ser tipo: ${menu[i].tipo[0]}, ${menu[i].tipo[1]}, ${menu[i].tipo[2]}</p>
          <button class='btnAñadir' data-id='${menu[i].id}'>Añadir</button>

        </div>`;
      } else {
        tituloAngel.innerHTML = `<span class='ang'>Menu Angeles</span>`;

        bebidasAngeles.innerHTML += `<div class="bebida" id="bebida">
          <H2 class='titulo'>${menu[i].nombre}</H2>
          <p>Precio: ${menu[i].precio} €</p>
          <p>Rareza: ${menu[i].rareza}</p>
          <p>Puede ser tipo: ${menu[i].tipo[0]} o ${menu[i].tipo[1]}</p>
        <button class='btnAñadir' data-id='${menu[i].id}'>Añadir</button>

        </div>`;
      }
    }
  }
}



// Gestionamos pedidos

// 1. Escuchamos el evento "click" en el contenedor padre de las bebidas de vampiro
bebidasVampiros.addEventListener("click", (e) => {

  // 2. e.target representa el elemento exacto donde se hizo clic.
  // .classList.contains("btnAñadir") verifica si el elemento clickeado tiene la clase "btnAñadir".
  if (e.target.classList.contains("btnAñadir")) {

    // 3. e.target.dataset.id accede al atributo 'data-id' del botón clickeado.
    // Guarda el ID de la bebida como texto (string).
    const idBebida = e.target.dataset.id;

    // 4. menu.find() recorre el arreglo 'menu' buscando la bebida correspondiente.
    // Number(idBebida) convierte el texto ("1") a número (1) para comparar con bebida.id.
    const bebidaSeleccionada = menu.find((bebida) => bebida.id === Number(idBebida));

    // Guardamos la bebida seleccionada en nuestro array del pedido
    pedido.push(bebidaSeleccionada);

    // 3. Ejecutamos la función para actualizar el HTML
    pintarResumenPedido("vampiro");
  }

});

// 1. Escuchamos el evento "click" en el contenedor padre de las bebidas de Angeles
bebidasAngeles.addEventListener("click", (e) => {

  // Comprobamos si el clic fue en un botón añadir
  if (e.target.classList.contains("btnAñadir")) {

    // Guardamos el ID que tiene el botón en el HTML
    const idBebida = e.target.dataset.id;

    // Buscamos el objeto de la bebida en el array 'menu'
    const bebidaSeleccionada = menu.find(
      (bebida) => bebida.id === Number(idBebida)
    );

    // Añadimos la bebida al array global 'pedido'
    pedido.push(bebidaSeleccionada);

    // ¡AQUÍ!: Le enviamos "angel" a la función
    pintarResumenPedido("angel");
  }
});



// Declaramos la función y le creamos un hueco llamado 'cliente'
// para saber si trabajamos con "vampiro" o "angel"
function pintarResumenPedido(cliente) {

  // 1. Guardamos en la variable 'contenedorDestino' la caja HTML de vampiros 
  //(si cliente es "vampiro") o la de ángeles (si es "angel")
  const contenedorDestino = (cliente === "vampiro") ? pedidoVampiros : pedidoAngels;

  // 2. Borramos todo el contenido de la caja seleccionada para dejarla vacía 
  contenedorDestino.innerHTML = "";

  // 3. Si el contador de la lista de pedidos es 0 (está vacía)
  //el 'return' apaga la función y no hace nada más
  if (pedido.length === 0) return;

  // 4. Ponemos un título pequeño <h3> dentro de la caja de destino
  contenedorDestino.innerHTML = `<h3>Resumen del Pedido</h3>`;

  // 5. Arrancamos un contador 'i' desde 0 que irá avanzando de 1 en 1 
  //hasta revisar todos los productos del array 'pedido'
  for (let i = 0; i < pedido.length; i++) {

    // 6. Preguntamos: ¿El cliente de la bebida guardada en la posición 
    //               'i' es exactamente igual al 'cliente' de esta caja?
    if (pedido[i].cliente === cliente) {

      // 7. Si la respuesta es SÍ, añadimos (+=) el nombre de la bebida 
      //    en un párrafo <p> dentro de la caja de destino
      contenedorDestino.innerHTML += `
        <div class="linea-pedido">
          <span>${pedido[i].nombre}</span>
          <span>${pedido[i].precio} €</span>
        </div>
      `;

    } // Cerramos la pregunta de filtro
  } // Cerramos el bucle contador
} // Cerramos la función entera



// La version larga 
// SIN contenedorDestino: Tendría que escribir la lógica dos veces


// function pintarResumenPedido(cliente) {

//   if (cliente === "vampiro") {
//     pedidoVampiros.innerHTML = ""; // Limpiamos la caja de vampiros
//     if (pedido.length === 0) return;
//     pedidoVampiros.innerHTML = `<h3>Resumen del Pedido</h3>`;
    
//     for (let i = 0; i < pedido.length; i++) {
//       if (pedido[i].cliente === cliente) {
//         pedidoVampiros.innerHTML += `<p>${pedido[i].nombre}</p>`;
//       }
//     }

//   } else {
//     pedidoAngels.innerHTML = ""; // Limpiamos la caja de ángeles
//     if (pedido.length === 0) return;
//     pedidoAngels.innerHTML = `<h3>Resumen del Pedido</h3>`;
    
//     for (let i = 0; i < pedido.length; i++) {
//       if (pedido[i].cliente === cliente) {
//         pedidoAngels.innerHTML += `<p>${pedido[i].nombre}</p>`;
//       }
//     }
//   }

// }


// contador de cada bebida con una variable para cada tipo de bebida, para recorrer 
// el array pedidos y si ya existe esa bebida contador ++

// crear un contadorSD o Sangre plaeada  entonces si el 
// contador es igual 0 (que es el primer item del array )