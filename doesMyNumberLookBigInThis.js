function narcissistic(value) {
  let sum = 0;
  let array = value.toString().split('')
  let x = array.length;
  
  for(let i = 0;i < x; i++){
    sum = sum+(array[i]**x);
  }
  
  if(sum === value){
    return true;
  } else {
    return false;
  }
}