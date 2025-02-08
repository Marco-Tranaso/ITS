lista = [1,2,3,4]
n=int(input("inserisci numero"))
for elemento in lista:
    if elemento == n:
        print("elemento è in lista")
        break
else:
        print("elemento in in lista")