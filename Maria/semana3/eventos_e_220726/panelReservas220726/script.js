// Declaracion de variables

const acticidad = document.getElementById("actividad");
const numeroPlazas = document.getElementById("numeroPlazas");
const mensajeReserva = document.getElementById("mensajeReserva");
const btnReserva = document.getElementById("btnReserva");

const listaParticipantes = document.getElementById('listaParticipantes')

let reservado = false;
let plazasDisponibles = 5;

// formulario
const formularioReserva = document.getElementById("formularioReserva");
const campoNombre = document.getElementById("nombre");
const mensajeNombre = document.getElementById("mensajeNombre");
const selectorTurno = document.getElementById("turno");
const comentario = document.getElementById("comentario");
const contadorCaracteres = document.getElementById("contadorCaracteres");
const resultadoFormulario = document.getElementById("resultadoFormulario");

// Listeners
btnReserva.addEventListener("mouseenter", () => {
  //"Comprueba si reservado es true."
  if (reservado) {
    btnReserva.textContent = "Cancelar Reserva";
  } else {
    btnReserva.textContent = "Reservar";
  }
});

btnReserva.addEventListener("mouseleave", () => {
  if (reservado) {
    btnReserva.textContent = "Reservado";
  } else {
    btnReserva.textContent = "Disponible";
  }
});

btnReserva.addEventListener("click", () => {
  // mensajeReserva.textContent = 'hahahaha'     prueba del boton

  // Aqui paso el valor de reservado al valor contrario del anterior
  reservado = !reservado;

  if (reservado) {
    //"Comprueba si reservado es true."
    plazasDisponibles--;
    btnReserva.textContent = "Reservado";
    mensajeReserva.textContent = "Reserva hecha";
    mensajeReserva.classList.add("reservada");
  } else {
    plazasDisponibles++;
    btnReserva.textContent = "Disponible";
    mensajeReserva.textContent = "Reserva cancelada";
    mensajeReserva.classList.remove("reservada");
  }
  numeroPlazas.textContent = plazasDisponibles;
});

// campos formulario
campoNombre.addEventListener("focus", () => {
  campoNombre.classList.add("campo-activo");
});

campoNombre.addEventListener("blur", () => {
  campoNombre.classList.remove("campo-activo");
  if (campoNombre.value.trim() === "") {
    mensajeNombre.textContent = "nombre obligatorio";
    mensajeNombre.classList.add("error");
  } else {
    mensajeNombre.textContent = "nombre correcto";
    mensajeNombre.classList.remove("error");
    mensajeNombre.classList.add("correcto");
  }
});

comentario.addEventListener("input", () => {
  //aqui contamos cada caracter que se va escribiendo en el textArea

  const cantidadcaracteres = comentario.value.length; // cantidadcaracteres es un numero

  // aqui cantidadCaracteres es una string porque esta en ''
  contadorCaracteres.textContent = `${cantidadcaracteres} de 100`;

  // necesitamos que cantidadCaracteres sea un numero para poder generar la condicion
  if (cantidadcaracteres >= 80) {
    contadorCaracteres.classList.add("error");
  } else {
    contadorCaracteres.classList.remove("error");
  }
});


// Selector de turno mañana o tarde
selectorTurno.addEventListener("change", () => {
  if (selectorTurno.value === "") {
    resultadoFormulario.textContent = `No has selecionado turno`;
    resultadoFormulario.classList.add("error");
  } else {
    resultadoFormulario.classList.remove("error");
    resultadoFormulario.textContent = `Turno selecionado: ${selectorTurno.value}`;
  }
});



//Listener al formulario
formularioReserva.addEventListener('submit', (e)=>{
    // El e evento lo agregamos para poder usar el preventDefault 
// que normalmente generaria el submit
    e.preventDefault()
    
    // console.log('Formlulario enviado')
    if(!reservado){
        resultadoFormulario.textContent = 'primero debes reserbar'
        resultadoFormulario.classList.add('error') 
        resultadoFormulario.classList.remove('correcto')
        return
    }

    const nombre = campoNombre.value.trim()
    const turno = selectorTurno.value

    if(nombre === '' || turno === ''){
        resultadoFormulario.textContent = 'completa nombre y turno'
        resultadoFormulario.classList.add('error')
        resultadoFormulario.classList.remove('correcto')
        return
    }

    resultadoFormulario.textContent = `Reserva confirmada para ${nombre} 
    en el turno de ${turno}`

    resultadoFormulario.classList.remove('error')
    resultadoFormulario.classList.add('correcto')

    //A partir de aqui creamos lista de participantes
    const aviso = document.querySelector('aviso')
    if(aviso){
        aviso.remove
    }

    const nuevoParticipante = document.createElement('article')
    nuevoParticipante.classList.add('participante')
    nuevoParticipante.innerHTML = `
    <span>${nombre} - Turno de ${turno}</span>
    <button class='btnEliminar'>Eleminar</button>
    `
    listaParticipantes.append(nuevoParticipante)


    formularioReserva.reset()
    contadorCaracteres = '0'
    mensajeNombre.textContent = ''
})


document.addEventListener('keydown', (e)=>{
    console.log(e.key)

    if(e.key === 'Escape'){
        mensajeNombre.textContent = ''
        resultadoFormulario.textContent = ''
    }
} )
