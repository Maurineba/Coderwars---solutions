function verificarRequisitos(height,  bounce,  window) {
  if(height < 0 || bounce >= 1 || bounce <=0 || window >= height){
    return true;
  }
}

function bouncingBall(h,  bounce,  window) {
  let count = 1;
  
  if(verificarRequisitos(h, bounce, window)) {
     return -1; 
  }
  
  while((h = h * bounce) > window){
    count += 2;
  }
  
    return count;
}
