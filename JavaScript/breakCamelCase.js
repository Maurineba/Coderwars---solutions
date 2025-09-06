function solution(string) {
let palavra = string.split("");

for (let i = 0; i < palavra.length; i++) {
    if(palavra[i] >= 'A' && palavra[i] <= 'Z'){
        palavra.splice(i, 0, ' ');
        i++;
    }
}
  
  return palavra.join("");
}