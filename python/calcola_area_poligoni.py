poligono= input("inserisci l'area del poligono da calcolare")
poligono1= poligono.lower().strip()

print(poligono1)
match poligono1:
    case "quadrato":
        lato = float(input("inserisci misura lato"))
        area=lato*4
        print(area)
    
    case "cerchio":
        lato = float(input("inserisci misura raggio"))
        area=(lato**2)*3.14
        print(area)

    case "rettangolo":
        base = float(input("inserisci misura base"))
        altezza = float(input("inserisci misura altezza"))
        area=base*altezza
        print(area)

    case "triangolo":
        base = float(input("inserisci misura base"))
        altezza = float(input("inserisci misura altezza"))
        area=(base*altezza)/2
        print(area)
    
    