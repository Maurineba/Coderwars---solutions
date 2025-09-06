function findUniq(arr) {
  let Array = arr.sort((a, b) => a - b);
  
  let itemA = Array[0];
  let itemB = Array[Array.length - 1];
  let a = 0, b = 0;
  
  for(let i = 0; i < 2; i++){
    if(Array[i] === itemA){
      a++;
    } else {
      b++;
    }
  }
    
  if(a > b) {
      return itemB;
    } else {
      return itemA;
    }
   
}