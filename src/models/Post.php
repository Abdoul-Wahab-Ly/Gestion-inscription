<?php
class Post{
    private $conn;
    private $id;
    private $matricule;
    private $prenom;
    private $nom;
    private $date_naissance;
    private $id_filliere;
    private $email;
    private $password;
    private $id_groupe;
    private $mail;
    private $table='etudiant';
    //constructor
    public function __construct($db){
        $this->conn=$db;
    }
    public function read(){
        $query = 'SELECT
        c.name as categorie_name,
        p.id,
        p.matricule,
        p.prenom,
        p.nom,
        p.id_filliere,
        p.email,
        p.password,
        p.id_groupe,
        p.nom,
        p.mail
        FROM
        '.$this->table.  ' p
        LEFT JOIN 
        categories c ON p.matricule= c.id
        ORDER BY 
        p.mail DESC';;


        $stmt = $this->conn->prepare($query);
        // execute la requete
        $stmt->execute();

        return $stmt;
            
    }

}