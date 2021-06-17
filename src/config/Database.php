<?php
class Database{
    private $conn;
    private $host ='localhost';
    private $db_name='gestion_etudiant';
    private $username='root';
    private $password='';
    // methode connect
    public function connect(){
        $this->conn=NULL;
        try{
            $this->conn = new PDO('mysql:host'.$this->host.';dbname='.$this->db_name, $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO:: ERRMODE_EXCEPTION);

        }catch(PDOException $e){
            echo 'connection error :'.$e->getMessage();echo 'connection error :'.$e->getMessage();
        }
        
        return $this->conn;
    }
    
}