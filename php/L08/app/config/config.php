<?php


//costanti

define('TITOLO', 'Titolo del sito');

define('ASSETS', './public/assets/');
define('CSS', './public/assets/css/');

define('JS', './public/assets/js/');


//variabili

$author = 'Alessandro';

//voci di menu

$menu = [
    ['nome' => 'Home', 'collegamento' => '?',],
    ['nome' => 'gallery', 'collegamento' => '?page=gallery'],
    ['nome' => 'login', 'collegamento' => '?page=login'],
    ['nome' => 'logout', 'collegamento' => '?page=logout'],

];

$piazze = [
    [
        'nome' => 'Piazza Vittorio',
        'foto' => 'https://www.italywhere.com/wp-content/uploads/2017/10/shutterstock_1350508232-1.jpg'
    ],
    [
        'nome' => 'Piazza San Carlo',
        'foto' => 'https://www.google.com/imgres?q=piazza%20san%20carl&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F27%2FTurin_piazza_san_carlo_2009.JPG%2F1200px-Turin_piazza_san_carlo_2009.JPG&imgrefurl=https%3A%2F%2Fit.wikipedia.org%2Fwiki%2FPiazza_San_Carlo&docid=z_G0ZOPF4nF7IM&tbnid=TJLjcPk9W9EMDM&vet=12ahUKEwiKiKONhbmMAxU6_rsIHV5iIfEQM3oECBkQAA..i&w=1200&h=803&hcb=2&ved=2ahUKEwiKiKONhbmMAxU6_rsIHV5iIfEQM3oECBkQAA'
    ],
    [
        'nome' => 'Piazza Castello',
        'foto' => 'https://www.torinoxl.com/wp-content/uploads/2015/06/piazza-castello.jpg'
    ],
    [
        'nome' => 'Piazza Statuto',
        'foto' => 'https://c8.alamy.com/compit/2fk14c1/pietrasanta-italia-27-apr-2021-piazza-statuto-in-pietrasanta-toscana-veduta-aerea-della-piazza-dove-furono-abbattiti-i-primi-alberi-foto-di-federico-neri-pacific-press-credit-pacific-press-media-production-corp-alamy-live-news-2fk14c1.jpg'
    ],
    [
        'nome' => 'Piazza dei Mestieri',
        'foto' => 'https://piazzadeimestieri.it/wp21/wp-content/uploads/2020/11/testata.jpg'
    ]
];

    //faccio partire la sessione

session_start(); //deve succedere prima di qualsiasi istruzione di output


function login($user, $password)
{
    if ($user == 'marco' && $password == '12345') {
        return true;
    }
    return false;
}

if (
    isset($_POST['username']) &&
    isset($_POST['password']) &&
    $_POST['username'] != trim('') &&
    $_POST['password'] != trim('')
) {

    $logged = login($_POST['username'], $_POST['password']);

    if($logged) {
        $_SESSION['utente'] = $_POST['username']; //salvo se l'utente è collegato
}
}