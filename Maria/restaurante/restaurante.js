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

const reset = document.getElementById('reset')

let pedido = [];

//-------------------------------------Funciones---------------------------

// Filtrar creatura

// AI corregida
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

reset.addEventListener("click", maria)

// function volverAlInicio() {

//     // Mostrar otra vez los dos paneles
//     vampiros.classList.remove("inactivo");
//     angels.classList.remove("inactivo");

//     // Vaciar títulos
//     tituloVampi.innerHTML = "";
//     tituloAngel.innerHTML = "";

//     // Vaciar tarjetas
//     bebidasVampiros.innerHTML = "";
//     bebidasAngeles.innerHTML = "";

//     // Activar los dos botones
//     btnVampiro.disabled = false;
//     btnAngel.disabled = false;

// }

function maria(){
  window.location.reload()
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

        bebidasVampiros.innerHTML += 
        `<div class="bebida" id="bebida">

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

// bebidasVampiros.addEventListener("click", (e) => {
//   // Verificamos si lo que se presionado fue el botón de Añadir
//   if (e.target.classList.contains("btnAñadir")) {
//     const idBebida = e.target.dataset.id;
//     console.log("ID capturado:", idBebida);
//   }
// });


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
    const bebidaSeleccionada = menu.find(bebida => bebida.id === Number(idBebida));
   

    // 5. Mostramos en la consola del navegador la información completa de la bebida encontrada.
    console.log("Bebida encontrada:", bebidaSeleccionada);
  }

});
