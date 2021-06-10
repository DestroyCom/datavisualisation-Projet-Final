<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Data</title>
        <link rel="stylesheet" href="https://meyerweb.com/eric/tools/css/reset/reset.css">
        <link rel="stylesheet" href="css/data.css">
    </head>
    <body>
        <?php require_once("header.php");?>
        <main>
            <section>
                <div id="concert">Concert</div>
                <div id ="stream">Stream</div>
            </section>
            
            <section id="PageMap">
                <?xml version="1.0" encoding="utf-8"?>
                
                <?php require_once("img/worldHigh.svg");?>
            </section>

            <section id="PageStream"class="hidden">

            </section>
        </main>
        
    </body>
    <script type="text/javascript" src="js/script.js"></script>
    <script src="js/map.js"></script>


</html>