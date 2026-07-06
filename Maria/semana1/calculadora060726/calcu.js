function add (a,b){
  console.log(a+6)
}

function saludar(){
  let name = document.getElementById('name').value

  if(name === ''){
    document.getElementById('greeting').style.display = 'block'
    document.getElementById('greeting').innerHTML = 'Hola, persona misteriosa'
    document.getElementById('comment').innerHTML = 'Puedes escribir tu nombre'
  } else{
  document.getElementById('greeting').style.display = 'block'
  document.getElementById('greeting').innerHTML = 'Hola, ' + name + '!'
  document.getElementById('comment').innerHTML = 'Puedes usar tu calculadora'
  }

}

function draw(numerico){
       let screen = document.getElementById('screen').value
  screen = screen + numerico
  document.getElementById('screen').value = screen
}

function resetScreen(){
document.getElementById('screen').value = ''
  document.getElementById('comment').innerHTML = 'Screen reset'
}

function calculate(){
  let ope = document.getElementById('screen').value
  let name = document.getElementById('name').value
  if(name === ''){
    name = 'parguela'
  }
  if(ope === ''){
    document.getElementById('comment').innerHTML = 'Primero escribe la operacion '
  } else{
    let result = eval(ope)
    document.getElementById('screen').value = result
    document.getElementById('comment').innerHTML = name + ', el resultado es ' +result
  }
}

function partyMode(){
  // document.body.classList.add('party')
  document.body.classList.toggle('party')
  document.getElementById('comment').innerHTML = 'has cambiando de modo la pagina'
}

function totalReset(){
  document.getElementById('name').value = ''
  document.getElementById('greeting').innerHTML = ''
  document.getElementById('greeting').style.display = 'none'
  document.getElementById('screen').value = ''
  document.getElementById('comment').innerHTML = ''

  document.body.classList.remove('party')
}