class Mezzi:
    def __init__(self, modello, posti, targa, manutenzione, alimentazione,nick):
        self.modello = modello
        self.posti = posti
        self.targa = targa
        self.manutenzione = manutenzione
        self.alimentazione = alimentazione
        self.nick=nick
        self.acceso= False

    def get_info(self):
        return f"{self.modello} {self.posti} {self.targa} {self.manutenzione} {self.alimentazione}"

    def rifornimento(self,qta):
        if self.alimentazione == "elettrico":
            return f"vado a fare l'elettricità di {qta}"
        
        else:
            return f"vado a fare broda di {qta}"
        
    def avvia(self):
        if self.__acceso:
            return f"guarda che sono già acceso"
        else:
            self.__acceso= True
            return f"avvio di mezzo {self.nick}"

          
    def stop(self):
        if self.__acceso:
            return f"guarda che sono già acceso"
        else:
            self.__acceso= True
            return f"avvio di mezzo {self.nick}"