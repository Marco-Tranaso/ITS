<?php 

    $lista_pokemon=file("./files/pokemon.csv");
    sort($lista_pokemon)
  ?>



<div id="sidebar">
    <h2 class="titolo">lista pokemon</h2>
    <ul>
        <?php foreach ($lista_pokemon as $pokemon): ?>    
            <li><a href="?nome_pokemon=<?= str_replace('"','',$pokemon) ?>" title="Scheda dettaglio pokemon: <?= str_replace('"','',$pokemon) ?>"><?= str_replace('"','',$pokemon) ?></a></li>
        <?php endforeach; ?>

        </ul>
</div>