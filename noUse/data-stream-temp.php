<?php 
    include_once('credentials-GITIGNORE/credentials.php');

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Rock Band Battle</title>
    <link rel="stylesheet" href="https://meyerweb.com/eric/tools/css/reset/reset.css">
    <link rel="stylesheet" href="css/data.css">
    <link rel="stylesheet" href="css/stream.css">
    <link rel="stylesheet" href="css/navbar.css">
</head>

<body>
    <header>
        <a class="logobeatles" href="data-stream-temp.php?groupe=1">The Beatles</a>
        <img class="logovs" src="img/vslogo.png" alt="logovs">
        <a class="logors" href="data-stream-temp.php?groupe=2">The Rolling Stones</a>
    </header>

    <div class="onglet">
        <h2>Concert</h2>
        <h2>Stream</h2>
    </div>
    <section id="hero">
        <div class="stream">
            <div class="group">
                <h2>Titres les plus écoutés</h2>
                <div class="ligne titres">
                </div>
                <h2>Top écoutes mensuelles</h2>
                <div class="ligne pays">
                </div>
            </div>
        </div>
    </section>
    <script src="js/streams.js"></script>
    <script src="js/global.js"></script>
</body>

</html>