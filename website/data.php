<?php 
    include_once('assets/credentials-GITIGNORE/credentials.php');
    include_once('secure.php')
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Data</title>
    <link rel="stylesheet" href="https://meyerweb.com/eric/tools/css/reset/reset.css">
    <link rel="stylesheet" href="assets/css/data.css">
    <link rel="stylesheet" href="assets/css/stream.css">
    <link rel="stylesheet" href="assets/css/global.css">
   
</head>

<body>
    <?php require_once("header.php");?>
    <main id="groupe1">
        <section>
            <div id="concert">Concert</div>
            <div id="stream">Stream</div>

        </section>

        <section id="PageMap">
            <?php require("assets/img/worldHigh.svg");?>

            <div>
                <p id="+">+</p>
                <p id="-">-</p>
            </div>

            <section id="legend">
                <img src="assets/img/mapLegend.png" alt="">
                <div>
                    <p id="100">100</p>
                    <p id="75">75</p>
                    <p id="50">50</p>
                    <p id="25">25</p>
                    <p>0</p>
                </div>
            </section>
        </section>

        <section id="PageStream" class="hidden">
            <?php include_once('stream.php'); ?>
        </section>
    </main>

</body>
<script type="text/javascript" src="assets/js/script.js"></script>
<script src="assets/js/map.js"></script>
<script src="assets/js/global.js"></script>


</html>