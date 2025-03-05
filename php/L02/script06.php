<?php
// Esercizio 8: Array Associativi
// Crea un array associativo che contiene i nomi e le età di almeno 3 persone. 
// Stampa ciascun nome e età utilizzando un ciclo foreach.

function fullName($persona){
    return $persona['nome'] . $persona['cognome'] . $persona['eta'];
}

$persona1 = array('nome' => 'alessandro', 'cognome' => 'magno', 'eta' => 1000);
$persona2 = array('nome' => 'napoleone', 'cognome' => 'bonaparte', 'eta' => 200);
$persona3 = array('nome' => 'giulio', 'cognome' => 'cesare', 'eta' => 2000);

$persone=[$persona1,$persona2,$persona3];

foreach ($persone as $persona) {
    echo $persona['nome'];
}

foreach ($persone as $persona){
    echo fullName($persona)."\n";
}