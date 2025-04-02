<h1>gallery</h1>

<?php
    if(!isset($_SESSION['utente']))
        die('Per vedere la galleria è necessario l\'account premium');

?>

<?php foreach($piazze as $piazza) : ?>

    <figure>
        <img src="<?= $piazza['foto']?>" alt="">
    </figure>
    <figcaption><?= $piazza['nome']?></figcaption>
<?php endforeach; ?>
