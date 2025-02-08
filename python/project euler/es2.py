primo = 0
secondo = 1
n=4000
somma=0
for i in range (2,n):
    if n%2==0:
        terzo= primo + secondo
        primo=secondo
        secondo=terzo
        somma=somma+terzo
        
print(somma)