while True:
    try:
        a = int(input("Inserisci primo numero: "))
        b = int(input("Inserisci secondo numero: "))
    except ValueError:
        print("Devi inserire solo dei numeri")
        break
    
    scelta = int(input("-----------------------\nInserisci l'operazione che vuoi eseguire: \n1: somma \n2: differenza\n3: moltiplicazione\n4: divisione\n5: elevazione a potenza\n6: uscire dal programma "))

    match scelta:
        case 1:
            print(f"La somma è {a+b}")
        case 2:
            print(f"La differenza è {a-b}")
        case 3:
            print(f"Il prodotto è {a*b}")
        case 4:
            try:
                print(f"La divisione è {a/b}")
            except ZeroDivisionError:
                print("Errore: Non puoi dividere per 0")
        case 5:
            print(f"L'elevazione a potenza è {a**b}")
        case 6:
            print(f"Sei uscito dal programma")
            exit()
        case _:
            print("Hai inserito operazione sbagliata")