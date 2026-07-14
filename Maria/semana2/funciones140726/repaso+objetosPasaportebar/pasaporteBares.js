//Array de los bares
const bares = [
  // Bar 1
  {
    id: 1,
    nombre: "Bar Atlanta",
    visitado: false,
  },
  // Bar 2
  {
    id: 2,
    nombre: "Bar El Toro",
    visitado: false,
  },
  // Bar 3
  {
    id: 3,
    nombre: "Fat Cat",
    visitado: false,
  },
  // Bar 4
  {
    id: 4,
    nombre: "La Prudència",
    visitado: false,
  },
  // Bar 5
  {
    id: 5,
    nombre: "Las Fernández",
    visitado: false,
  },
  // Bar 6
  {
    id: 6,
    nombre: "Nun Cultural Café",
    visitado: false,
  },
  // Bar 7
  {
    id: 7,
    nombre: "Chula Vista",
    visitado: false,
  },
  // Bar 8
  {
    id: 8,
    nombre: "El Magraner Boig",
    visitado: false,
  },
  // Bar 9
  {
    id: 9,
    nombre: "El Cafetí",
    visitado: false,
  },
  // Bar 10
  {
    id: 10,
    nombre: "La Ravala",
    visitado: false,
  },
  // Bar 11
  {
    id: 11,
    nombre: "La Monroe",
    visitado: false,
  },
  // Bar 12
  {
    id: 12,
    nombre: "Arume",
    visitado: false,
  },
  // Bar 13
  {
    id: 13,
    nombre: "La Morera",
    visitado: false,
  },
  {
    id: 14,
    nombre: "Bar Mendizábal",
    visitado: false,
  },
  {
    id: 15,
    nombre: "Dr. Beer & Mr. Fried",
    visitado: false,
  },
  {
    id: 16,
    nombre: "Biocenter",
    visitado: false,
  },
  {
    id: 17,
    nombre: "Bar Costa",
    visitado: false,
  },
  {
    id: 18,
    nombre: "Clemen's Boqueria",
    visitado: false,
  },
  {
    id: 19,
    nombre: "L'Universal",
    visitado: false,
  },
];
// console.log(bares[3].id)
// for(let i=0; i < bares.length; i++){
//   console.log(bares[i].nombre)
// }

// ---------------Acceso y saludo---------------------------

function obtenerNombreUsuario() {
  const nombre = document.getElementById("nombre").value;
  return nombre;
}

function nombreValido(nombre) {
  if (nombre.trim() === "") {
    return false;
  } else {
    return true;
  }
}

function mostrarSaludo(nombre) {
  const saludo = document.getElementById("saludo");
  saludo.textContent = `Hola ${nombre}`;
}

// Listener:
const btnEntrar = document.getElementById("btnEntrar");

btnEntrar.addEventListener("click", function () {
  const nombre = obtenerNombreUsuario();
  if (nombreValido(nombre) === false) {
    document.getElementById("mensajeAcceso").textContent = "Introduce tu nombre";
    return;
  }
  document.getElementById("mensajeAcceso").textContent = "";
  mostrarSaludo(nombre);

  document.getElementById("acceso").style.display = "none";
  document.getElementById("pasaporte").style.display = "block";

  mostrarBares()
});




// --------- Gestionamos los bares      /       Recorrido y sellos-------------------

function buscarBarPorId(idBar) {
  for (let i = 0; i < bares.length; i++) {
    if (bares[i].id === idBar) {
      return bares[i];
    }
  }
  return null;
}

function sellarBar(idBar) {
  const bar = buscarBarPorId(idBar);

  if (bar === null) {
    return "No se ha encontrado el bar";
  }

  if (bar.visitado === true) {
    return "Este bar ya esta sellado";
  }

  bar.visitado = true;
  return `Has sellado tu visita en ${bar.nombre}`;
}

//----------funcion para mostrar los bares---------

function mostrarBares() {
  const listaBares = document.getElementById("listaBares");
  listaBares.innerHTML = "";

  for (let i = 0; i < bares.length; i++) {
    const tarjeta = document.createElement("article");
    const numero = document.createElement("p");
    const nombre = document.createElement("h3");
    const estado = document.createElement("p");
    const boton = document.createElement("button");

    tarjeta.classList.add("bar"); //pendiente
    numero.classList.add("numero-bar"); //pendiente
    estado.classList.add("estado"); //pendiente

    numero.textContent = `Parada ${bares[i].id}`;
    nombre.textContent = bares[i].nombre;

    if (bares[i].visitado === true) {
      estado.textContent = "Visita sellada";
      boton.textContent = "Ya sellado";
      boton.disabled = true;
      tarjeta.classList.add("bar-visitado");
    } else {
      estado.textContent = "Pendiente";
      boton.textContent = "Sellar visita";
    }
    boton.addEventListener('click', function(){
      const mensaje = sellarBar(bares[i].id)
      document.getElementById('mensajeSello').textContent = mensaje
      mostrarBares
    })

    // todo esto pasa en la seccion:  listaBares
    tarjeta.appendChild(numero)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(boton)

    listaBares.appendChild(tarjeta)

  }
}
