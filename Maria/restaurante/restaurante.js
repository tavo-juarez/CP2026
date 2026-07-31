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
let contadorSangreDorada = 0
let contadorSangrePlateada = 0
let contadorSangreSimple = 0
let contadorSangreCristal = 0

//Angeles
let contadorAlmaPlateada = 0
let contadorAlmaHumana = 0
let contadorAlmaFacha = 0
let contadorAlmaDorada = 0

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
          
          ${/* .join(", ") convierte el array de tipos en un solo texto separado por comas, 
            evitando el error 'undefined' si hay menos de 3 elementos */ ""}
          <p>Puede ser tipo: ${menu[i].tipo.join(", ")}</p>
          <button class='btnAñadir' data-id='${menu[i].id}'>Añadir</button>

        </div>`;
      } else {
        tituloAngel.innerHTML = `<span class='ang'>Menu Angeles</span>`;

        bebidasAngeles.innerHTML += `<div class="bebida" id="bebida">
          <H2 class='titulo'>${menu[i].nombre}</H2>
          <p>Precio: ${menu[i].precio} €</p>
          <p>Rareza: ${menu[i].rareza}</p>

        ${/* .join(", ") convierte el array de tipos en un solo texto separado por comas, 
          evitando el error 'undefined' si hay menos de 3 elementos */ ""}
        <p>Puede ser tipo: ${menu[i].tipo.join(", ")}</p>
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

    // 5. NUEVO: Buscamos si esta bebida YA se encuentra dentro de nuestro arreglo 'pedido'
    const existeEnPedido = pedido.find((item) => item.id === Number(idBebida));

   // 6. NUEVO: Evaluamos si el resultado de la búsqueda devolvió una bebida existente
    if (existeEnPedido) {

      // 7. Si la bebida ya estaba en el pedido, le sumamos 1 a su propiedad 'cantidad'
      existeEnPedido.cantidad++;

    } else {

      // 8. Si es la primera vez que se añade, creamos una copia del objeto con 'cantidad: 1'
      const nuevaBebida = { ...bebidaSeleccionada, cantidad: 1 };

      // 9. Agregamos el nuevo objeto con su cantidad al arreglo global 'pedido'
      pedido.push(nuevaBebida);

    } // Fin del condicional de existencia

    // 10. Volvemos a pintar el ticket en pantalla con la información actualizada
    pintarResumenPedido("vampiro");

  } // Fin de la comprobación del botón

});


// 1. Escuchamos el evento "click" en el contenedor padre de las bebidas de Angeles
bebidasAngeles.addEventListener("click", (e) => {

  // 2. Verificamos si el clic fue en un botón de añadir
  if (e.target.classList.contains("btnAñadir")) {

    // 3. Extraemos el ID guardado en el atributo data-id del botón
    const idBebida = e.target.dataset.id;

    // 4. Buscamos en el arreglo 'menu' los datos de la bebida pulsada
    const bebidaSeleccionada = menu.find((bebida) => bebida.id === Number(idBebida));

    // 5. Buscamos si esta bebida YA se encuentra dentro de nuestro arreglo 'pedido'
    const existeEnPedido = pedido.find((item) => item.id === Number(idBebida));

    // 6. Evaluamos si la bebida ya existía en el pedido
    if (existeEnPedido) {

      // 7. Si ya existía, le sumamos 1 a su propiedad 'cantidad'
      existeEnPedido.cantidad++;

    } else {

      // 8. Si es la primera vez que se añade, creamos la copia del objeto con 'cantidad: 1'
      const nuevaBebida = { ...bebidaSeleccionada, cantidad: 1 };

      // 9. Agregamos el nuevo objeto al arreglo global 'pedido'
      pedido.push(nuevaBebida);

    } // Fin del condicional de existencia

    // 10. Volvemos a pintar el ticket de Ángeles con la información actualizada
    pintarResumenPedido("angel");

  } // Fin de la comprobación del botón

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

  // 4. Creamos una variable acumuladora para ir sumando el precio total
  let total = 0;

  // 4. Ponemos un título pequeño <h3> dentro de la caja de destino
  contenedorDestino.innerHTML = `<h3>Resumen del Pedido</h3>`;

  // 5. Arrancamos un contador 'i' desde 0 que irá avanzando de 1 en 1 
  //hasta revisar todos los productos del array 'pedido'
  for (let i = 0; i < pedido.length; i++) {

    // 6. Preguntamos: ¿El cliente de la bebida guardada en la posición 
    //               'i' es exactamente igual al 'cliente' de esta caja?
    if (pedido[i].cliente === cliente) {

      // Creamos una variable clara que almacena el cálculo de esta línea
    const subtotal = pedido[i].precio * pedido[i].cantidad;

    // 9. Le sumamos este subtotal al acumulador del total general
      total += subtotal;

      // 7. Si la respuesta es SÍ, añadimos (+=) el nombre de la bebida 
      //    en un párrafo <p> dentro de la caja de destino
      contenedorDestino.innerHTML += `
        <div class="linea-pedido">
    <!-- Bloque 1: Cantidad y Nombre juntos a la izquierda -->
    <div class="info-bebida">
      <button class="btn-restar" data-id="${pedido[i].id}">-</button>
      <span>${pedido[i].cantidad} X</span>
      <button class="btn-sumar" data-id="${pedido[i].id}">+</button>
      <span>${pedido[i].nombre}</span>
    </div>

    <!-- Bloque 2: Subtotal a la derecha -->
    <span>Subtotal: ${subtotal} €</span>
  </div>
  
`;

    } // Cerramos la pregunta de filtro
  } // Cerramos el bucle contador

  contenedorDestino.innerHTML += `
    <div class="total-pedido">
      <h4>Total: ${total} €</h4>
    </div>
    <button class="btn-realizar-pedido">Realizar pedido</button>
  `;
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



// 1. Escuchamos los clics que ocurren dentro de la caja 'pedidoVampiros'
pedidoVampiros.addEventListener("click", (e) => {

  // 2. Guardamos la etiqueta exacta donde hiciste clic en la pantalla
  const elementoPulsado = e.target;

  // --- LÓGICA DEL BOTÓN MÁS (+) ---
  // 3. Comprobamos si el elemento pulsado tiene la clase "btn-sumar"
  if (elementoPulsado.classList.contains("btn-sumar")) {

    // 4. Leemos el id de la bebida desde 'data-id' y lo convertimos a número
    const idBebida = Number(elementoPulsado.dataset.id);

    // 5. Buscamos la bebida dentro del arreglo 'pedido'
    const bebidaEncontrada = pedido.find((item) => item.id === idBebida);

    // 6. Si la bebida existe, le sumamos 1 a la propiedad 'cantidad'
    if (bebidaEncontrada) {
      bebidaEncontrada.cantidad++;

      // 7. Volvemos a pintar el Resumen del Pedido actualizado
      pintarResumenPedido("vampiro");
    }
    
  }

  // --- LÓGICA DEL BOTÓN MENOS (-) ---
  // 8. Comprobamos si el elemento pulsado tiene la clase "btn-restar"
  if (elementoPulsado.classList.contains("btn-restar")) {

    // 9. Leemos el id de la bebida desde 'data-id' y lo convertimos a número
    const idBebida = Number(elementoPulsado.dataset.id);

    // 10. Buscamos la bebida dentro del arreglo 'pedido'
    const bebidaEncontrada = pedido.find((item) => item.id === idBebida);

    // 11. Si la bebida existe, le restamos 1 a la propiedad 'cantidad'
    if (bebidaEncontrada) {
      bebidaEncontrada.cantidad--;

      // 12. Si la cantidad llega a 0, la eliminamos del arreglo 'pedido'
      if (bebidaEncontrada.cantidad === 0) {
        pedido = pedido.filter((item) => item.id !== idBebida);
      }

      // 13. Volvemos a pintar el Resumen del Pedido actualizado
      pintarResumenPedido("vampiro");
    }
  }

  // --- LÓGICA DEL BOTÓN REALIZAR PEDIDO ---
  // Comprobamos si el elemento pulsado tiene la clase "btn-realizar-pedido"
  if (elementoPulsado.classList.contains("btn-realizar-pedido")) {
    // Ejecutamos la función para abrir el modal emergente
    abrirModal();
  }

// 14. Cerramos el escuchador de clics de pedidoVampiros
});

// Escuchador de clics para la caja de Ángeles
pedidoAngels.addEventListener("click", (e) => {
  const elementoPulsado = e.target;

  // BOTÓN MÁS (+)
  if (elementoPulsado.classList.contains("btn-sumar")) {
    const idBebida = Number(elementoPulsado.dataset.id);
    const bebidaEncontrada = pedido.find((item) => item.id === idBebida);

    if (bebidaEncontrada) {
      bebidaEncontrada.cantidad++;
      pintarResumenPedido("angel");
    }
  }

  // BOTÓN MENOS (-)
  if (elementoPulsado.classList.contains("btn-restar")) {
    const idBebida = Number(elementoPulsado.dataset.id);
    const bebidaEncontrada = pedido.find((item) => item.id === idBebida);

    if (bebidaEncontrada) {
      bebidaEncontrada.cantidad--;

      if (bebidaEncontrada.cantidad === 0) {
        pedido = pedido.filter((item) => item.id !== idBebida);
      }

      pintarResumenPedido("angel");
    }
  }

  // --- LÓGICA DEL BOTÓN REALIZAR PEDIDO ---
  // Comprobamos si el elemento pulsado tiene la clase "btn-realizar-pedido"
  if (elementoPulsado.classList.contains("btn-realizar-pedido")) {
    // Ejecutamos la función para abrir el modal emergente
    abrirModal();
  }
});


// ====================================================
//              CONTROL DE LA VENTANA MODAL
// ====================================================

// Seleccionamos el elemento contenedor del modal emergente por su id único
const modalPedido = document.getElementById("modalPedido");
// Seleccionamos el botón de cierre que está dentro del modal por su id único
const btnCerrarModal = document.getElementById("btnCerrarModal");

// Declaramos la función para hacer visible el modal en pantalla
function abrirModal() {
  // Eliminamos la clase ocultar para que el CSS muestre el modal emergente
  modalPedido.classList.remove("ocultar");
}

// Declaramos la función para esconder el modal de la pantalla
function cerrarModal() {
  // Añadimos la clase ocultar para volver a ocultar el modal emergente
  modalPedido.classList.add("ocultar");
}

// Escuchamos el clic en el botón cerrar del modal para ejecutar la función cerrarModal
btnCerrarModal.addEventListener("click", cerrarModal);
