<?php
    if (($_GET["groupe1"]>14 || $_GET["groupe2"]>14 || $_GET["groupe1"]<1 || $_GET["groupe2"]<1) || ($_GET['groupe1'] == $_GET["groupe2"])){
        header('Location: index.html');
    }
?>