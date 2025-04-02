<?php

$pagina = isset($_GET['page']) ? $_GET['page'] : 'home';
switch ($pagina) {
    case 'gallery':
        include './app/view/gallery.php';
        break;
    case 'login':
        include './app/view/login.php';
        break;
    case 'logout':
        unset($_SESSION['utente']);
        header('Location: index.php');
        break;
    default:
    include './app/view/home.php';
    break;
}