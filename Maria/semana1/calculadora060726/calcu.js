function add (a,b){
  console.log(a+6)
}

function saludar(){
  let name = document.getElementById('name').value

  if(name === ''){
    document.getElementById('greeting').style.display = 'block'
    document.getElementById('greeting').innerHTML = 'Hola, persona misteriosa'
  } else{
    document.getElementById('greeting').style.display = 'block'
  document.getElementById('greeting').innerHTML = 'Hola, ' + name + '!'
  }

  
}