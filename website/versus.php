<?php
include_once('assets/credentials-GITIGNORE/credentials.php');
$grpValue = $_POST['grpValue'];
$idValue = $_POST['idValue'];

$query = "SELECT Nom_Groupe FROM groupe WHERE ID_Groupe=:grpValue";
$stmt = $pdo->prepare($query);
$stmt->execute(array(':grpValue'=>intval($grpValue)));
$checker = $stmt -> fetch(PDO::FETCH_ASSOC);
$add_value1 = "UPDATE vote SET versus_value_group1 = versus_value_group1 + 1 WHERE versus_id = :idValue";
$add_value2 = "UPDATE vote SET versus_value_group2 = versus_value_group2 + 1 WHERE versus_id = :idValue";


if (isset($idValue) AND isset($grpValue)) 
{
    switch($idValue)
    {
        case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:
            if($checker['Nom_Groupe'] == 'The Beatles'){
                $stmt1 = $pdo->prepare($add_value1);
                $stmt1->execute(array(":idValue"=>$idValue));
            }else {
                $stmt1 = $pdo->prepare($add_value2);
                $stmt1->execute(array(":idValue"=>$idValue));
            }
            break;
        case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:
            if($checker['Nom_Groupe'] == "Oasis"){
                $stmt1 = $pdo->prepare($add_value1);
                $stmt1->execute(array(":idValue"=>$idValue));
            }else {
                $stmt1 = $pdo->prepare($add_value2);
                $stmt1->execute(array(":idValue"=>$idValue));
            }
            break;
        case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:
            if($checker['Nom_Groupe'] == "Nirvana"){
                $stmt1 = $pdo->prepare($add_value1);
                $stmt1->execute(array(":idValue"=>$idValue));
            }else {
                $stmt1 = $pdo->prepare($add_value2);
                $stmt1->execute(array(":idValue"=>$idValue));
            }
            break;
        case 29:case 30:case 31:case 32:case 33:case 34:case 35:
            if($checker['Nom_Groupe'] == "Muse"){
                $stmt1 = $pdo->prepare($add_value1);
                $stmt1->execute(array(":idValue"=>$idValue));
            }else {
                $stmt1 = $pdo->prepare($add_value2);
                $stmt1->execute(array(":idValue"=>$idValue));
            }
            break;
        case 36:case 37:case 38:case 39:case 40:case 41:
            if($checker['Nom_Groupe'] == "Sex Pistols"){
                $stmt1 = $pdo->prepare($add_value1);
                $stmt1->execute(array(":idValue"=>$idValue));
            }else {
                $stmt1 = $pdo->prepare($add_value2);
                $stmt1->execute(array(":idValue"=>$idValue));
            }
            break;
        case 42:case 37:case 43:case 44:case 45:case 46:
            if($checker['Nom_Groupe'] == "Radiohead"){
                $stmt1 = $pdo->prepare($add_value1);
                $stmt1->execute(array(":idValue"=>$idValue));
            }else {
                $stmt1 = $pdo->prepare($add_value2);
                $stmt1->execute(array(":idValue"=>$idValue));
            }
            break;
        case 47:case 48:case 49:case 50:
            if($checker['Nom_Groupe'] == "Clash"){
                $stmt1 = $pdo->prepare($add_value1);
                $stmt1->execute(array(":idValue"=>$idValue));
            }else {
                $stmt1 = $pdo->prepare($add_value2);
                $stmt1->execute(array(":idValue"=>$idValue));
            }
            break;
        case 51:case 52:case 53:
            if($checker['Nom_Groupe'] == "Blur"){
                $stmt1 = $pdo->prepare($add_value1);
                $stmt1->execute(array(":idValue"=>$idValue));
            }else {
                $stmt1 = $pdo->prepare($add_value2);
                $stmt1->execute(array(":idValue"=>$idValue));
            }
            break;
        case 54:case 55:
            if($checker['Nom_Groupe'] == "AC DC"){
                $stmt1 = $pdo->prepare($add_value1);
                $stmt1->execute(array(":idValue"=>$idValue));
            }else {
                $stmt1 = $pdo->prepare($add_value2);
                $stmt1->execute(array(":idValue"=>$idValue));
            }
            break;
        case 56:
            if($checker['Nom_Groupe'] == "Queen"){
                $stmt1 = $pdo->prepare($add_value1);
                $stmt1->execute(:idValue"=>$idValue);
            }else {
                $stmt1 = $pdo->prepare($add_value2);
                $stmt1->execute(array(":idValue"=>$idValue));
            }
            break;
        case 57:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 65:case 66:
            if($checker['Nom_Groupe'] == "The Rolling Stones"){
                $stmt1 = $pdo->prepare($add_value1);
                $stmt1->execute(array(":idValue"=>$idValue));
            }else {
                $stmt1 = $pdo->prepare($add_value2);
                $stmt1->execute(array(":idValue"=>$idValue));
            }
            break;
        default:
            echo "error";
    }
}
else 
{
    echo 'error';
}
