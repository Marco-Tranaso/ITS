class Persona:
    def __init__(self,nome,cognome,eta):
        self.nome=nome
        self.cognome=cognome
        self.eta=eta

    def salutame(self):
        print(f"Ciao sono {self.nome} {self.cognome} e ho {self.eta} anni")

marco = Persona("Marco", "Tranaso", 19)

marco.salutame()