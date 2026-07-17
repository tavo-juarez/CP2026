const menu = [
//----------------Bebidas Vampiros-----------
  {
    // id: 1,
    cliente: vampiro,
    precio: 15,
    tipo: ['AB-', 'B-','AB+'],
    rareza: 'alta',
    ingrediente: ["sangre"],
    nombre: 'Sangre Dorada',
  },
  {
    // id: 2,
    cliente: vampiro,
    precio: 10,
    tipo: ['A-', 'O-','B+'],
    rareza: 'intermedia',
    ingrediente: ["sangre"],
    nombre: 'Sangre Plateada',
  },
  {
    // id: 3,
    cliente: vampiro,
    precio: 7.5,
    tipo: ['A+', 'O+'],
    rareza: 'baja',
    ingrediente: ["sangre"],
    nombre: 'Sangre Simple',
  },
  {
    // id: 4,
    cliente: vampiro,
    precio: 35,
    tipo: ['Rh'],
    rareza: 'Muy alta',
    ingrediente: ["sangre"],
    nombre: 'Sangre de Cristal',
  },
  

  //----------------Bebidas Angeles-----------

  {
    // id: 5,
    cliente: angel,
    precio: 10,
    tipo: ['Alegre', 'Empaticx','Divertidx'],
    rareza: 'alta',
    ingrediente: ["Espiritu"],
    nombre: 'Alma Dorada',
  },
  {
    // id: 6,
    cliente: angel,
    precio: 10,
    tipo: ['Neutral', 'Sencillx','Amigable'],
    rareza: 'intermedia',
    ingrediente: ["Espiritu"],
    nombre: 'Alma Plateada',
  },
  {
    // id: 7,
    cliente: angel,
    precio: 10,
    tipo: ['Pretenciosx', 'Simple','Egoista'],
    rareza: 'baja',
    ingrediente: ["Espiritu"],
    nombre: 'Alma de facha',
  },
  {
    // id: 8,
    cliente: angel,
    precio: 10,
    tipo: ['Alegre', 'Empaticx','Divertidx','Resilient','Criticx'],
    rareza: 'alta',
    ingrediente: ['Alegre', 'Empaticx','Divertidx','Resilient'],
    nombre: 'Alma Humana',
  },
 
];

//----------------Funciones-----------

function tipoDeCreatura() {
  if (menu.cliente === 'vampiro') {
    return true;
  } else {
    return false;
  }
}