class Calcolatrice:
    def __init__(self):
        self.a=None
        self.b=None
    def inserisci_numeri(self):
        while True:
            try:
                self.a=int(input("Inserisci primo numero: "))
                self.b=int(input("Inserisci secondo numero: "))
                break
            except ValueError:
                print("Devi inserire solo dei numeri")
    def somma(self):
        return self.a+self.b
    def differenza(self):
        return self.a-self.b
    def moltiplicazione(self):
        return self.a*self.b
    def divisione(self):
        try:
            return self.a/self.b
        except ZeroDivisionError:
            return "Errore: Non puoi dividere per 0"
    def elevazione(self):
        return self.a**self.b
    def mostra_menu(self):
        print("-----------------------")
        print("Inserisci l'operazione che vuoi eseguire:")
        print("1: somma")
        print("2: differenza")
        print("3: moltiplicazione")
        print("4: divisione")
        print("5: elevazione a potenza")
        print("6: uscire dal programma")
    def esegui_operazione(self, scelta):
        if scelta==1:
            print(f"La somma è {self.somma()}")
        elif scelta==2:
            print(f"La differenza è {self.differenza()}")
        elif scelta==3:
            print(f"Il prodotto è {self.moltiplicazione()}")
        elif scelta==4:
            print(f"La divisione è {self.divisione()}")
        elif scelta==5:
            print(f"L'elevazione a potenza è {self.elevazione()}")
        elif scelta==6:
            print(f"Sei uscito dal programma")
            return False
        else:
            print("Hai inserito operazione sbagliata")
        return True

def main():
    calcolatrice=Calcolatrice()
    while True:
        calcolatrice.inserisci_numeri()
        calcolatrice.mostra_menu()
        try:
            scelta=int(input("Scegli operazione: "))
        except ValueError:
            print("Devi inserire un numero valido per l'operazione")
            continue
        if not calcolatrice.esegui_operazione(scelta):
            break

if __name__=="__main__":
    main()
