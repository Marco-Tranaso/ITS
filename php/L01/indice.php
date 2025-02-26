<?php define('TITOLO', 'Benvenuto nel mio sito web PHP powered');?>
<?php include 'intestazione.php'; ?>


<h1><?= TITOLO ?></h1>

<p>Oggi è il <?= date('d/m/Y') ?></p>
<p>Sono le ore <?= date('h:i:s') ?></p>

<?php $materia='Programmazione Php'?>

<h2><?= $materia ?></h2>

<?php $materia='Fondamenti di basi di dati'?>

<h2><?= $materia ?></h2>
<?php

echo __FILE__.'<br>';
echo __LINE__.'<br>';

?>

<?php include 'piedipagina.php'; ?>