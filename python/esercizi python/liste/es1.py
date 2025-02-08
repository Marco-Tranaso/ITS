lista = [1,2,5,4]
massimo=0
minimo=lista[0]
for i in lista:
    if i > massimo:
        i=massimo
    else:
        i=minimo

print(f"Il numero più grande è {massimo}")
print(f"Il numero più piccolo è {minimo}")