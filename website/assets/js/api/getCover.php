<?php

header('Content-type: application/json');
$url = urlencode('http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=' . $_GET['API_KEY'] . '&artist=' . $_GET['artistName'] . '&album=' . $_GET['albumName'] . '&format=json');
echo($url);
echo file_get_contents($url);

?>

