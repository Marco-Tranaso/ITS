lunghezza_totale=100
larghezza_piastrella=41



numero_piastrelle=lunghezza_totale // larghezza_piastrella
spazio_coperto=larghezza_piastrella*numero_piastrelle
spazio_vuoto= lunghezza_totale-spazio_coperto

finisce_con_nero= numero_piastrelle % 2==1
print(f"il numero di piastrelle è {numero_piastrelle}")
print("inizia con nero")
print(f"lo spazio vuoto è {spazio_vuoto}")
print(f"la fila finjisce con {'nero' if finisce_con_nero else 'bianco'}")

