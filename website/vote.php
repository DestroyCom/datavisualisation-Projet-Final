<?php include_once('secure.php');
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Rock Band Battle</title>
    <link rel="icon" type="image/png" href="assets/img/vslogo.png" />
    <?php include_once('assets/credentials-GITIGNORE/credentials.php');


            $id1 = $_GET['groupe1'];
            $id2 = $_GET['groupe2'];


            $query1 = "SELECT Nom_Groupe FROM groupe WHERE ID_Groupe = :id1";
            $query2 = "SELECT Nom_Groupe FROM groupe WHERE ID_Groupe = :id2";

            $stmt = $pdo->prepare($query1);
            $stmt->execute(array(':id1'=>intval($id1)));
            $groupe1 = $stmt -> fetch(PDO::FETCH_ASSOC);

            $stmt = $pdo->prepare($query2);
            $stmt->execute(array(':id2'=>intval($id2)));
            $groupe2 = $stmt -> fetch(PDO::FETCH_ASSOC);

            $query3 = "SELECT versus_value_group1 FROM vote WHERE versus_group1 = :grp1 AND versus_group2 = :grp2;";
            $query4 = "SELECT versus_value_group2 FROM vote WHERE versus_group1 = :grp1 AND versus_group2 = :grp2;";

            $stmt = $pdo->prepare($query3);
            $stmt->execute(array(':grp1'=>$groupe1["Nom_Groupe"],':grp2'=>$groupe2["Nom_Groupe"]));
            $vote1 = $stmt -> fetch(PDO::FETCH_ASSOC);
            if($vote1 == false)
            {
                $query3 = "SELECT versus_value_group1 FROM vote WHERE versus_group1 = :grp2 AND versus_group2 = :grp1;";
                $stmt = $pdo->prepare($query3);
                $stmt->execute(array(':grp1'=>$groupe1["Nom_Groupe"],':grp2'=>$groupe2["Nom_Groupe"]));
                $vote1 = $stmt -> fetch(PDO::FETCH_ASSOC);
            }

            $stmt = $pdo->prepare($query4);
            $stmt->execute(array(':grp1'=>$groupe1["Nom_Groupe"],':grp2'=>$groupe2["Nom_Groupe"]));
            $vote2 = $stmt -> fetch(PDO::FETCH_ASSOC);
            if($vote2 == false)
            {
                $query4 = "SELECT versus_value_group2 FROM vote WHERE versus_group1 = :grp2 AND versus_group2 = :grp1;";
                $stmt = $pdo->prepare($query4);
                $stmt->execute(array(':grp1'=>$groupe1["Nom_Groupe"],':grp2'=>$groupe2["Nom_Groupe"]));
                $vote2 = $stmt -> fetch(PDO::FETCH_ASSOC);
            }

        ?>
    <link href="assets/css/vote.css" rel="stylesheet">
</head>

<body>
    <div id="header">
        <?php require_once("header_vote.php");?>
    </div>
    <p class="explic">Cliquez sur une image pour voter votre groupe favoris ! </p>
    <div id="veil">
        <div class="fleche2"><a href="index.html"><img src="assets/img/fleche.png"
                    style="width: 100px;height: 100px; position : absolute"></a></div>
        <h1><?= $groupe1["Nom_Groupe"]?> versus <?=$groupe2["Nom_Groupe"]?></h1>
        <h2>Résultats</h2>
        <div id="grid">

            <div class="container">
                <img src="assets/img/<?=strval($id1)?>-groupe.png">
                <p>nb de vote : <?= $vote1["versus_value_group1"];?></p>
                <p><?= round($vote1["versus_value_group1"] / ($vote1["versus_value_group1"] + $vote2["versus_value_group2"])*100,1) ?>
                    %</p>

            </div>

            <div class="container">
                <img src="assets/img/<?=strval($id2)?>-groupe.png">
                <p>nb de vote : <?= $vote2["versus_value_group2"]?></p>
                <p><?= round($vote2["versus_value_group2"] / ($vote1["versus_value_group1"] + $vote2["versus_value_group2"])*100,1)?>
                    %</p>

            </div>
        </div>
    </div>
    <script type="text/javascript" src="assets/js/vote.js"></script>
</body>

</html>