try:
    x = int(input("inserisci un numero"))
    y = int(input("inserisci un altro numero"))
    print(x/y)

except ValueError:
    print("guarda che non stai dividendo per un numero")

except ZeroDivisionError:
    print("guarda che non si può dividere per 0")

except Exception as e:
    print(f"errore generale {e}")