lista = [1,2,3,4]
n = int(input("inserire valore da cercare"))
j=0
for i in lista:
    if i==n:
        j+=1

print(f"il valore {n} è presente {j} volte)")