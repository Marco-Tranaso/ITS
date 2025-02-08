class Studente:
    def __init__(self, nome, voto):
        self.nome = nome
        self.voto = voto

class Registro:
    def __init__(self, file_registro="registro.txt"):
        self.studenti = []
        self.file_registro = file_registro

    def aggiungi_studente(self, nome, voto):
        try:
            voto = float(voto)
            if voto < 0 or voto > 10:
                print("Errore: Il voto deve essere compreso tra 0 e 10.")
            else:
                self.studenti.append(Studente(nome, voto))
                print(f"Studente {nome} aggiunto con voto {voto}.")
        except ValueError:
            print("Errore: Il voto deve essere un numero valido.")

    def salva_su_file(self):
        try:
            with open(self.file_registro, "w") as file:
                for studente in self.studenti:
                    file.write(f"{studente.nome},{studente.voto}\n")
            print("Dati salvati con successo.")
        except Exception as e:
            print(f"Errore durante il salvataggio: {e}")

    def leggi_da_file(self):
        try:
            with open(self.file_registro, "r") as file:
                self.studenti = []
                for linea in file:
                    nome, voto = linea.strip().split(",")
                    self.studenti.append(Studente(nome, float(voto)))
            print("Dati caricati con successo.")
        except FileNotFoundError:
            print("Errore: Il file non esiste.")
        except Exception as e:
            print(f"Errore durante la lettura: {e}")

    def visualizza_studenti(self):
        if not self.studenti:
            print("Nessuno studente presente nel registro.")
        else:
            for studente in self.studenti:
                print(f"{studente.nome}: {studente.voto}")

    def filtra_per_voto(self, soglia):
        try:
            soglia = float(soglia)
            studenti_filtrati = [s for s in self.studenti if s.voto > soglia]
            if not studenti_filtrati:
                print(f"Nessuno studente con un voto maggiore di {soglia}.")
            else:
                print(f"Studenti con voto maggiore di {soglia}:")
                for studente in studenti_filtrati:
                    print(f"{studente.nome}: {studente.voto}")
        except ValueError:
            print("Errore: La soglia deve essere un numero valido.")

# Esempio di utilizzo
registro = Registro()

while True:
    print("\n1. Aggiungi studente")
    print("2. Salva su file")
    print("3. Leggi da file")
    print("4. Visualizza studenti")
    print("5. Filtra studenti per voto")
    print("6. Esci")

    scelta = input("Scegli un'opzione: ")
    if scelta == "1":
        nome = input("Inserisci il nome dello studente: ")
        voto = input("Inserisci il voto dello studente: ")
        registro.aggiungi_studente(nome, voto)
    elif scelta == "2":
        registro.salva_su_file()
    elif scelta == "3":
        registro.leggi_da_file()
    elif scelta == "4":
        registro.visualizza_studenti()
    elif scelta == "5":
        soglia = input("Inserisci la soglia del voto: ")
        registro.filtra_per_voto(soglia)
    elif scelta == "6":
        print("Uscita dal programma.")
        break
    else:
        print("Scelta non valida.")
