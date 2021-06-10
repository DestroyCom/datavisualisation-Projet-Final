<?php 
    include_once('credentials-GITIGNORE/credentials.php');
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Data</title>
    <link rel="stylesheet" href="https://meyerweb.com/eric/tools/css/reset/reset.css">
    <link rel="stylesheet" href="css/data.css">
    <link rel="stylesheet" href="css/stream.css">
</head>

<body>
    <?php require_once("header.php");?>
    <main id="groupe1">
        <section>
            <div id="concert">Concert</div>
            <div id="stream">Stream</div>
        </section>

        <section id="PageMap">
            <?php require("img/worldHigh.svg");?>
        </section>

        <section id="PageStream" class="hidden">
            <?php include_once('stream.php'); ?>
        </section>
    </main>

</body>
<script type="text/javascript" src="js/script.js"></script>
<script src="js/map.js"></script>
<script src="js/global.js"></script>


</html>