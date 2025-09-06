var uniqueInOrder=function(iterable){
  let noDuplicate;
  
  if(typeof iterable === "string") {
    noDuplicate = iterable.split("");
  } else {
    noDuplicate = iterable;
  }
  
  for(let i = 0; i < noDuplicate.length; i++){
    for(let j = i + 1; j < i + 2; j++){
      if(noDuplicate[i] === noDuplicate[j]){
        noDuplicate.splice(j, 1);
        i = -1;
        break;
      }
    }
  }
  return noDuplicate
}