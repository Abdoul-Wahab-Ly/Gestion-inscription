<?php
   //header
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

require('../../config/Database.php');
require('../../models/Post.php');

// on instancie la classe connection et la class post
$database = new Database();
//instance blog
$db= $database->connect();
//blog post query
$post = new Post($db);

$result=$post->read();
//get row
$num = $result->rowCount();
if($num>0){
    $posts_arr=array();
    $posts_arr['data']=array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        $post_item=array(
            'id'=>$id,
            'matricule'=>$matricule,
            'prenom'=>$prenom,
            'nom'=>$nom,
            'date_naissance'=>$date_naissance,
            'id_filliere'=>$id_filliere,
            'email'=>$email,
            'password'=>$password,
            'id_groupe'=>$id_groupe,
            'telephone'=>$mail,
            
        );
        array_push($posts_arr, $post_item);
    }
    // turn to json
    echo json_encode($posts_arr);
}else{
    //no post
    echo json_encode(
        array('message'=>'NO POST FOUND')

    );
}

