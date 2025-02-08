lista = [1,2,3,4]

maggiore=lista[0]

for elemento in lista:
    if elemento > maggiore:
        elemento=maggiore

print(f"{maggiore} è il più grande")
