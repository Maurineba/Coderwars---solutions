def solution(s):
    lista = list(s)

    if len(lista)%2 == 0:
        resultado = [None] * ((len(lista)//2))
        for i in range(0, len(lista), 2):
            j = i//2
            resultado[j] = lista[i] + lista[i+1]
        return resultado
    else:
        resultado = [None] * ((len(lista)//2))
        for i in range(0, len(lista)-1, 2):
            j = i//2
            resultado[j] = lista[i] + lista[i+1]
            print(resultado)
        resultado.append(lista[-1]+"_")
        return resultado