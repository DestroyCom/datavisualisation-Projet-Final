<?php 
    $user='rock-band_db';
    $pass='mo2passDB';
    
    $pdo = new PDO('mysql:host=mysql-rock-band.alwaysdata.net;dbname=rock-band_db', $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ]);
    $request_method = $_SERVER["REQUEST_METHOD"];
    $idGroupe = $_GET['var1'];
    $query="SELECT *FROM concerts WHERE ID_Groupe=".$idGroupe."";
    
    $response = array();
    $stmt = $pdo->prepare($query);
    $stmt->execute();
    $db = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    foreach ($db as $values) {
        
        $response[] = $values;

        
    }
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *');
    echo json_encode($response, JSON_PRETTY_PRINT);

?>
