function formatar(numero) { 
  if(numero < 10){
    numero = '0' + numero; 
  }
  return String(numero);
}

function humanReadable (seconds) {
  let hour, minute, second;
  second = seconds;
  
  minute = Math.floor(second / 60);
  second = second % 60;
  
  
  hour = Math.floor(minute / 60);
  minute = minute % 60;
  
  return `${formatar(hour)}:${formatar(minute)}:${formatar(second)}`;
}