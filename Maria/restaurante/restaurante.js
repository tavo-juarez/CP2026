const menu = [
  //----------------Bebidas Vampiros-----------
  {
    // id: 1,
    cliente: "vampiro",
    precio: 15,
    tipo: ["AB-", "B-", "AB+"],
    rareza: "alta",
    ingrediente: ["sangre"],
    nombre: "Sangre Dorada",
  },
  {
    // id: 2,
    cliente: "vampiro",
    precio: 10,
    tipo: ["A-", "O-", "B+"],
    rareza: "intermedia",
    ingrediente: ["sangre"],
    nombre: "Sangre Plateada",
  },
  {
    // id: 3,
    cliente: "vampiro",
    precio: 7.5,
    tipo: ["A+", "O+"],
    rareza: "baja",
    ingrediente: ["sangre"],
    nombre: "Sangre Simple",
  },
  {
    // id: 4,
    cliente: "vampiro",
    precio: 35,
    tipo: ["Rh"],
    rareza: "Muy alta",
    ingrediente: ["sangre"],
    nombre: "Sangre de Cristal",
  },

  //----------------Bebidas Angeles-----------

  {
    // id: 5,
    cliente: "angel",
    precio: 10,
    tipo: ["Alegre", "Empaticx", "Divertidx"],
    rareza: "alta",
    ingrediente: ["Espiritu"],
    nombre: "Alma Dorada",
  },
  {
    // id: 6,
    cliente: "angel",
    precio: 10,
    tipo: ["Neutral", "Sencillx", "Amigable"],
    rareza: "intermedia",
    ingrediente: ["Espiritu"],
    nombre: "Alma Plateada",
  },
  {
    // id: 7,
    cliente: "angel",
    precio: 10,
    tipo: ["Pretenciosx", "Simple", "Egoista"],
    rareza: "baja",
    ingrediente: ["Espiritu"],
    nombre: "Alma de facha",
  },
  {
    // id: 8,
    cliente: "angel",
    precio: 10,
    tipo: ["Alegre", "Empaticx", "Divertidx", "Resilient", "Criticx"],
    rareza: "alta",
    ingrediente: ["Alegre", "Empaticx", "Divertidx", "Resilient"],
    nombre: "Alma Humana",
  },
];

let btnVampiro = document.getElementById("btnVampiro");
let btnAngel = document.getElementById("btnAngel");

let tituloVampi = document.querySelector(".tituloVampi");
let tituloAngel = document.querySelector(".tituloAngel");

let bebidasVampiros = document.querySelector(".bebidasVampiros");
let bebidasAngeles = document.querySelector(".bebidasAngeles");

//-------------------------------------Funciones---------------------------

// Filtrar creatura

//Mi funcion:

// btnVampiro.addEventListener("click", () => {
//   let creature = "vampiro";
// });

// btnAngel.addEventListener("click", () => {
//   let creature = "angel";
// });

// AI corregida
btnVampiro.addEventListener("click", () => {
  mostrarMenu("vampiro");
  btnVampiro.disabled = true;
  btnAngel.disabled = false;
});

btnAngel.addEventListener("click", () => {
  mostrarMenu("angel");
  btnAngel.disabled = true;
  btnVampiro.disabled = false;
});

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
          <p>Puede ser tipo: ${menu[i].tipo[0]} o ${menu[i].tipo[1]}</p>
          <button class='btnAñadir' id='Añadir'>Añadir</button>
        </div>`;
      } else {

        tituloAngel.innerHTML = `<span class='ang'>Menu Angeles</span>`;

        bebidasAngeles.innerHTML += `<div class="bebida" id="bebida">
          <H2 class='titulo'>${menu[i].nombre}</H2>
          <p>Precio: ${menu[i].precio} €</p>
          <p>Rareza: ${menu[i].rareza}</p>
          <p>Puede ser tipo: ${menu[i].tipo[0]} o ${menu[i].tipo[1]}</p>
    
        </div>`;
      }
    }
  }
}
