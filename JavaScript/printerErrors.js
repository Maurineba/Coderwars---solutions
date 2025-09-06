function printerError(s) {
    let array = s.split("");
    let error = 0;
  
    for(let i = 0; i < array.length; i++){
      if(array[i] > 'm'){
        error++;
      }
    }
    
    
    return `${error}/${array.length}`;
}