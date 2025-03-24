
<?php $nome = isset($_GET['nome_pokemon']) ? $_GET['nome_pokemon'] : 'Tranasauro'?>

<?php 

include("./model/pokemon.php");

$lista_pokemon = file("./files/pokemon_total.csv");
$raccoglitore_pokemon = [];
foreach ($lista_pokemon as $riga) {
    $riga_esplosa = explode(",", $riga);

    $nome_ = $riga_esplosa[1];
    $tipo1 = $riga_esplosa[2];
    $tipo2 = $riga_esplosa[3];
    $attacco = $riga_esplosa[6];
    $difesa = $riga_esplosa[7];

    $pokemon = new Pokemon($nome_,$tipo1,$tipo2,$attacco,$difesa);
   //  $raccoglitore_pokemon[] = $pokemon;
   array_push($raccoglitore_pokemon, $pokemon);
}

foreach ($raccoglitore_pokemon as $pokemon) {
    if ($pokemon -> nome == $nome) {
        $tipo1 = $pokemon -> tipo1;
        $tipo2 = $pokemon -> tipo2;
        $attacco = $pokemon -> attacco;
        $difesa = $pokemon -> difesa;
    }
}

?>

<div id="content">
    <h2 class="nome pokemon"><?= $nome ?></h2>
    <h3 class="nome pokemon"><?= $tipo1 ?></h3>
    <h3 class="nome pokemon"><?= $tipo2 ?></h3>
    <h3 class="nome pokemon"><?= $attacco ?></h3>
    <h3 class="nome pokemon"><?= $difesa ?></h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quibusdam labore ex minima dicta doloribus
        enim obcaecati natus praesentium sit!</p>
</div>