// Declaraciones de variables
let elCantidad = document.getElementById("cantidadEntradas");
const btnGenerar = document.getElementById("btnGenerar");
const mensaje = document.querySelector(".mensaje");

//Listeners
btnGenerar.addEventListener("click", generarEntradas);

function generarEntradas() {
  let cantidad = Number(elCantidad.value);
  let precioUnitario = 70;
  let precioTotal = 0;
  mensaje.innerHTML = "";

  if (cantidad <= 0) {
    mensaje.innerHTML = "esto no puedes";
  } else if (cantidad > 10) {
    mensaje.innerHTML = "Puedes generar max 10 entradas";
  } else {
    //hasta ahora que hemos validado las condiciones de pedir la entrada,
    // este es el caso bueno por eso aqui va el for
    mensaje.innerHTML = `generando ${cantidad} entradas <br>`;

    //Ahora generamos las entradas porque cumple las condiciones
    for (let entrada = 1; entrada <= cantidad; entrada++) {
      precioTotal = precioTotal + precioUnitario; // calcula precio total

      //Este do lo hacemos porque queremos que el codigo que genera tenga min 3 cifras
      let codigo;
      do {
        codigo = Math.floor(Math.random() * 1000);// genera codigo entrada (numero aleatorio)
      } while (codigo < 100);
      
      mensaje.innerHTML += `entrada ${entrada} generada. Codigo: ${codigo} <br>`;
    }
    // precioTotal = cantidad * precioUnitario - aqui tambien se prodria calcular el precio total
    mensaje.innerHTML += `Total entradas generadas: ${cantidad} <br> esto costara ${precioTotal}`;
  }
}
