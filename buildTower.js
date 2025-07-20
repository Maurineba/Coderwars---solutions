function towerBuilder(nFloors) {
    let andar = [];
    var space;
    var bloco;
    
    for (let i = 0; i < nFloors; i++) {
        bloco = "*".repeat(i * 2 + 1);      
        space = " ".repeat(nFloors - 1 - i); 
        
        andar.push(space + bloco + space); 
    }
  
    return andar 
}