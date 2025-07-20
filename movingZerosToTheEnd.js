function moveZeros(arr) {
let tamanho = arr.length;
  for(let i = 0; i < tamanho; i++){
    if(arr[i] === 0){
      arr.splice(i,1);
      arr.push(0);
      tamanho--;
      i--;
    }
  }
  return arr;
}