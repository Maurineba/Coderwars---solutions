function spinWords(string){
  let stringArray = string.split(" ");
  
  for(let i = 0; i < stringArray.length; i++){
    if(stringArray[i].length >= 5){
      stringArray[i] = stringArray[i].split("").reverse().join("")
    }
  }
  return stringArray.join(" ")
}