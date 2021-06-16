<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Vote</title>
        
        <?php include_once('credentials.php')?>
        <link href="vote.css" rel="stylesheet">
        <script type="text/javascript" src="vote.js"></script>
    </head>
    <body>
        <div id="header">
            <?php require_once("header_vote.php");?>
        </div>
        <div id ="veil">
            <div id="container">
                <p><?php//$groupe1?> versus <?php//$groupe2?></p>
            </div>
        </div>
    </body>
</html>
