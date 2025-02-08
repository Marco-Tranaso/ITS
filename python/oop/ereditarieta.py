class Animale:
    def __init__(self,nome):
        self.nome=nome
    
    def muovi(self):
        return f"{self.nome} si muove"
    
class Cane(Animale):
    def muovi(self):
         return f"{self.nome} si scaanglia e corre"
    
    
class Pesce(Animale):
    def muovi(self):
         return f"{self.nome} si specia e nuota"

animale=Animale("bestiah")
cane = Cane("Fidoh")
pesce = Pesce("nemohh")


print(animale.muovi())

print(cane.muovi())

print(pesce.muovi())