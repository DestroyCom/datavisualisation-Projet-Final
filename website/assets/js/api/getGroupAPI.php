<?php 
    include_once('../../credentials-GITIGNORE/credentials.php');
    
    if(isset($_GET['groupe'])){
        $groupe = htmlspecialchars($_GET['groupe']);
        $request_method = $_SERVER["REQUEST_METHOD"];
        $query =  "SELECT * FROM groupe WHERE ID_Groupe = ?";

        $reponse = array();

        $executeQuery = $pdo->prepare($query);
        $executeQuery->execute(array($groupe));

        $db = $executeQuery->fetchAll(PDO::FETCH_ASSOC);
        foreach($db as $values){
            $reponse[]=$values; 
        }
    }
    else{
        $reponse = 'ERREUR';
    }

    header('Content-Type: application/json');
    echo json_encode($reponse, JSON_PRETTY_PRINT);
?>