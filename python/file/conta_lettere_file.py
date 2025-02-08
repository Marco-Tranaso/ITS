try:
    nome_file = "input.txt"
    with open(nome_file, 'r') as file:
        contenuto = file.read()
        nome_file.count("a")
        print("contenuto dei file invertito e messo tutto maiuscolo")
    with open("output.txt", 'w') as file:
        nome_file.count("a")
except Exception as e:
    print(f"errore generale {e}")

    