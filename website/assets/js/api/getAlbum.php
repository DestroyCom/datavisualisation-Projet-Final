<?php

header('Content-type: application/json');
echo file_get_contents('https://api.t4ils.dev/artistInfo?artistid=' . $_GET['artistid']);