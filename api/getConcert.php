<?php 
    include_once('../credentials-GITIGNORE/credentials.php');
    
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
