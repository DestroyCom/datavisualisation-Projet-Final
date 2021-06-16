<!DOCTYPE html>
<html>
    <head>
        <?php
            $group1 = $_GET['group1'];
            $group2 = $_GET['group2'];
        ?>
        <meta charset="utf-8">
        <title>Rock Band Battle</title>
        <style type="text/css">
            body {
            height: 98vh;
            width: 98vw;
            background:white;
            }
            .bg_cover > .veil {
                height: 98vh;
                width: 98vw;
                background: black;
                opacity: 0.35;
                z-index: 3;
            }
        </style>
    </head>
    <body>
        <div class="bg_cover">
            <img src="img/<?=htmlspecialchars($group1);?>_cover.png"></img>
            <img src="img/<?=htmlspecialchars($group2);?>_cover.png"></img>
            <div class="veil">
            </div>
        </div>
        <div class="faces">
            <img src="img/<?=htmlspecialchars($group1);?>_faces.png"></img>
            <img src="img/<?=htmlspecialchars($group2);?>_faces.png"></img>
        </div>
        <div class="titles">
            <p><?= htmlspecialchars($group1);?></p>
            <img src="img/vs.png"></img>
            <p><?= htmlspecialchars($group2);?></p>
        </div>
        <div class="buttons">
            <button>Vote1</button>
            <button>Vote2</button>
            <button>see data</button>
        </div>

    </body>
</html>