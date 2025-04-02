<nav>
    <ul>
        <?php foreach ($menu as $link): ?>
            <li><a href="<?= $link['collegamento'] ?>"><?= $link['nome'] ?></a></li>
            <?php endforeach; ?>
            <?php if (isset($_SESSION['utente'])) : ?>
                <li><a href="?page=logout">logout</a></li>
            <?php endif; ?>

            <?php if (!isset($_SESSION['utente'])) : ?>
                <li><a href="?page=login">logout</a></li>
            <?php endif; ?>
    
          
    </ul>
</nav>