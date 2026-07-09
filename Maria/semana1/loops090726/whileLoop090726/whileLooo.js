// Declaracion de variables
let plantaDestino = document.getElementById("planta");
const btnGo = document.getElementById("btnGo");
let recorrido = document.querySelector(".recorrido");
let plantaInicial = document.getElementById("plantaActual");


//listeners
btnGo.addEventListener("click", moverAscensor);



function moverAscensor() {
  let destino = Number(plantaDestino.value);

  let plantaActual = 5;

  recorrido.innerHTML = "";

  if (destino < 0 || destino > 10) {
    recorrido.innerHTML = "La planta debe estar entre 0 y 10";
  } else if (destino > plantaActual) {
    recorrido.innerHTML = "cerrando puertas <br>";
    recorrido.innerHTML = "subiendo..<br>";
    while (plantaActual <= destino) {
      recorrido.innerHTML += `Planta ${plantaActual} <br>`;
      plantaActual++;
    }
    recorrido.innerHTML += "abriendo puertas <br>";
    recorrido.innerHTML += `has llegado a la planta ${destino}`;
  } else if (destino < plantaActual) {
    recorrido.innerHTML = "cerrando puertas <br>";
    recorrido.innerHTML = "bajando..<br>";
    while (plantaActual >= destino) {
      recorrido.innerHTML += `Planta ${plantaActual} <br>`;
      plantaActual--;
    }
    recorrido.innerHTML += "abriendo puertas <br>";
    recorrido.innerHTML += `has llegado a la planta ${destino}`;
  } else {
    recorrido.innerHTML = "sal";
  }
}
