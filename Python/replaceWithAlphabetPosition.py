alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
def alphabet_position(text):
    text = text.lower()
    criptografada = []
    
    for caracter in text:
        if caracter in alfabeto:  
            indice = alfabeto.index(caracter) + 1
            criptografada.append(str(indice))  

    return " ".join(criptografada)

text = "The sunset sets at twelve o' clock."
criptografada = alphabet_position(text)

print(criptografada)