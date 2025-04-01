let elementi = [
    "Pizza", "Pasta", "Hamburger", "Sushi", "Torta",
    "Libro: Il Signore degli Anelli", "Libro: Harry Potter", "Libro: 1984", "Libro: Orgoglio e Pregiudizio", "Libro: Il Piccolo Principe",
    "Mela", "Banana", "Arancia", "Pera", "Uva",
    "Tazza", "Sedia", "Tavolo", "Zaino", "Telefono",
    "Cioccolato", "Biscotti", "Gelato", "Caffè", "Tè",
    "Film: Inception", "Film: Matrix", "Film: Interstellar", "Film: Il Padrino", "Film: Forrest Gump"
];

function stampaConInterval() {
    let indice = 0;
    let intervallo = setInterval(function() {
        console.log(elementi[indice]);
        indice++;

        if (indice >= elementi.length) {
            clearInterval(intervallo);
        }
    }, 1000);
}

function stampaConTimeout(indice) {
    if (indice < elementi.length) {
        setTimeout(function() {
            console.log(elementi[indice]);
            stampaConTimeout(indice + 1);
        }, 1000);
    }
}

stampaConInterval();
