<?php
    $user = 'rock-band_db';
    $pass = 'dataVizProjet2021';

    $pdo = new PDO('mysql:host=mysql-rock-band.alwaysdata.net;dbname=rock-band_db', $user, $pass, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
?>