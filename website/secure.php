<?php
    if ($_GET["groupe1"]>13 || $_GET["groupe2"]>13 || $_GET["groupe1"]<1 || $_GET["groupe2"]<1){
        header('Location: index.html');
    }
?>