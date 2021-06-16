<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="assets/css/index.css">
    <?php include_once('assets/credentials-GITIGNORE/credentials.php'); ?>
    <link rel="icon" type="image/png" href="assets/img/vslogo.png"/>
</head>

<body>
    <?php
        $idGroupe1 = $_GET['groupe1'];
        $idGroupe2 = $_GET['groupe2'];
        $query1 = "SELECT Nom_Groupe FROM groupe WHERE ID_Groupe=".$idGroupe1."";
        $query2 = "SELECT Nom_Groupe FROM groupe WHERE ID_Groupe=".$idGroupe2."";
        $stmt1 = $pdo->prepare($query1);
        $stmt2 = $pdo->prepare($query2);
        $stmt1->execute();
        $stmt2->execute();
        $nomGroupe1 = $stmt1 -> fetch(PDO::FETCH_ASSOC);
        $nomGroupe2 = $stmt2 -> fetch(PDO::FETCH_ASSOC);
    ?>
    <!-- Hero Header -->
    <div class="header">
        <section id="heroleft">
            <div class="fond">
                <img src=<?php echo "assets/img/" . strval($idGroupe1). "-groupe.png";?> alt="" class="groupe1">
                <p class="name1"><?php echo $nomGroupe1['Nom_Groupe'] ?></p>
            </div>
        </section>
        <img class="logovs" src="assets/img/vslogo.png" alt="logovs">
        <section id="heroright">
            <div class="fond">
                <img src=<?php echo "assets/img/" . strval($idGroupe2). "-groupe.png";?> alt="" class="groupe2">
                <p class="name2"><?php echo $nomGroupe2['Nom_Groupe'] ?></p>
            </div>
        </section>
    </div>

    <section class="bloc">
        <p class="select">SELECT DATA</p>
        <div class="boutons">
            <button id="goToMap" class="bouton1">CONCERTS</button>
            <button id="goToStream" class="bouton2">STREAMS</button>
        </div>
    </section>



</body>
<script type="text/javascript" src="assets/js/index.js"></script>
</html>