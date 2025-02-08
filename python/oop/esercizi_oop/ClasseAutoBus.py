from ClasseMezzo import Mezzi

class Autobus(Mezzi):
    def __init__(self, modello, posti, targa, manutenzione, alimentazione, nick):
        super().__init__(modello, posti, targa, manutenzione, alimentazione, nick)

def cambia_linea(self,nuova_linea):
    self.__linea=nuova_linea
    return f"{self.nick} ha cambiato linea in{nuova_linea}"


def mostra_linea(self):
    return f"la linea percorsa da {self.nick } è {self.__Linea}"