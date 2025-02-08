minimo = int(input("inserire primo intervallo"))
massimo = int(input("inserire secondo intervallo"))
somma=0
for i in range (minimo,massimo):
    if i%2==0:
        somma+=i

print(somma)