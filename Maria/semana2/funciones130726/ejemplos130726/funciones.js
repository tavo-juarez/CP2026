function fecha() {
  console.log(new Date());
}
fecha();

function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}
saludar("javier");

// function sumaInutil(){
//   let a = 2
//   let b = 3
//   console.log(a+b)
//   document.write('esta funcion escribe un  ' + (a+b))
// }

function suma(a, b) {
  console.log("esta suma da " + (a + b));
}
suma(4, 8);

//    "Return"  (hacer que la funcion me devuelva algo, lo que devuelva a de
//             estar dentro de un contenedor, una variable es un contenedor)

function sumaTop(c, d) {
  return c + d;
}
let salida = sumaTop(20, 7);
document.write(salida);

// Evaluar si un numero es par
function esPar(n) {
  return n % 2 === 0;
}
let parImpar = esPar(20);
console.log(parImpar);

function areaRect(largo, ancho) {
  return largo * ancho;
}
let area = areaRect(2, 4);
console.log(area);

// Calcular edad
function calcularEdad(nacimiento) {
  const anyoActual = new Date().getFullYear();
  if (nacimiento > anyoActual) {
    return "año no valido";
  }
  return anyoActual - nacimiento;
}
let miEdad = calcularEdad(1989)
console.log(miEdad)

// let fechas = Date.now()
// console.log(fechas)


// "Funcion anonima" no puede existir si no asignada como 
// valor a una exprecion (porque no puedo llamarla)

const noSaludo = function (nombre){
  'Hola' + nombre
}