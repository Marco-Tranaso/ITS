stringa = "ciao"
j = {}

for i in stringa:
    if i in j:
        j[i] += 1
    else:
        j[i] = 1

for lettera, count in j.items():
    print(f"La lettera '{lettera}' compare {count} volte")
