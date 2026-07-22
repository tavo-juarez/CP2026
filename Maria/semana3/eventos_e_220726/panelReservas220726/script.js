
// Declaracion de variables

const acticidad = document.getElementById('actividad')
const numeroPlazas = document.getElementById('numeroPlazas')
const mensajeReserva = document.getElementById('mensajeReserva')
const btnReserva = document.getElementById('btnReserva')

let reservado = false
let plazasDisponibles = 5


// Listeners
btnReserva.addEventListener('mouseenter', () => {

//"Comprueba si reservado es true."
    if (reservado) {
        btnReserva.textContent = 'Cancelar Reserva'
    } else {
        btnReserva.textContent = 'Reservar'
    }
})

btnReserva.addEventListener('mouseleave', ()=>{
    if (reservado) {
        btnReserva.textContent = 'Reservado'
    } else {
        btnReserva.textContent = 'Disponible'
    }
})

btnReserva.addEventListener('click', ()=>{
  // mensajeReserva.textContent = 'hahahaha'     prueba del boton

  // Aqui paso el valor de reservado al valor contrario del anterior
  reservado = !reservado

  if(reservado){
    //"Comprueba si reservado es true."
    plazasDisponibles --
    btnReserva.textContent = 'Reservado'
    mensajeReserva.textContent = 'Reserva hecha'
    mensajeReserva.classList.add('reservada')
  } else {
    plazasDisponibles ++
    btnReserva.textContent = 'Disponible'
    mensajeReserva.textContent = 'Reserva cancelada'
    mensajeReserva.classList.remove('reservada')
  }
  numeroPlazas.textContent = plazasDisponibles

})