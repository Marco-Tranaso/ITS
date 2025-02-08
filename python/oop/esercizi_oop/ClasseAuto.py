from ClasseMezzo import Mezzi

class Auto(Mezzi):
    def __init__(self, modello, posti, targa, manutenzione, alimentazione, nick,hp,litriBag):
        super().__init__(modello, posti, targa, manutenzione, alimentazione, nick,hp)
        self.hp=hp
        self.litriBag=litriBag
        self.__stato = False #se lo stato è true allora il veicolo è occupato/noleggiato


    def dammi_stato(self):
        return self.__occupato

#questo metodo qaunto invocato vambia lo stato da libero a occupato e viceversa
    def cambia_stato(self):
        if self.__occupato:
            self.__occupato=False
            return f"{self.nick} adesso è libero"

        else:
            self.__occupato=True
            return f"{self.nick} adesso è occupato"