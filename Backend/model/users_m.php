<?php
    Class Users_model {
        private $db;
        private $users;
        public function __construct(){
            require_once("./model/connexio.php");
            $this->db=Connexio::connectar();
            $this->users=array();
        }

        public function getUsers(){
            $consulta = "SELECT * FROM users";
            $result = $this->db->query($consulta);
            while ($fila=$result->fetch(PDO::FETCH_ASSOC)){
                $this->users[]=$fila;
            }
            return $this->users;
        }

        public function getUserById($id){
            $consulta = "SELECT * FROM users WHERE id =". $id .";";
            $result = $this->db->query($consulta);
            while ($fila=$result->fetch(PDO::FETCH_ASSOC)){
                return $fila;
            }
            return null;
        }

        public function getUsersByGender($genero){
            $consulta = "SELECT * FROM users WHERE genero =". $genero .";";
            $result = $this->db->query($consulta);
            while ($fila=$result->fetch(PDO::FETCH_ASSOC)){
                $this->users[]=$fila;
            }
            return $this->users;
        }

        public function getUsersByAge($baix, $alt){
            $consulta = "SELECT * FROM users WHERE edad >=". $baix ." AND edad <=". $alt .";";
            $result = $this->db->query($consulta);
            while ($fila=$result->fetch(PDO::FETCH_ASSOC)){
                $this->users[]=$fila;
            }
            return $this->users;
        }

        public function appendUser($user){
            $new_id = -1;
            if ($user){
                $consulta = "SELECT id FROM users ORDER BY id DESC LIMIT 1;";
                $result = $this->db->query($consulta);
                $last_id = $result->fetch(PDO::FETCH_ASSOC)["ID"];
                $new_id = $last_id + 1;
                $consulta = "INSERT INTO users (id, nombre, edad, genero, descripcion, mail, pwd) VALUES(:id, :nombre, :edad, :genero, :descripcion, :mail, :pwd);";
                $dades = [
                    'id'=>$new_id,
                    'nombre'=>$user->nombre,
                    'edad'=>$user->edad,
                    'genero'=>$user->genero,
                    'descripcion'=>$user->descripcion,
                    'mail'=>$user->mail,
                    'pwd'=>$user->pwd
                ];
                $res_insert = $this->db->prepare($consulta)->execute($dades);
            }
            return $new_id;
        }

        public function deleteUsersById($id){
            $consulta = "DELETE FROM users WHERE ID=?;";
                
            $res_delete = $this->db->prepare($consulta)->execute(array($id));
        }
        public function insert($id,$nombre,$edad,$genero,$descripcion,$mail,$pwd) {
            $sentencia = $this->db->prepare("Insert into users (id,nombre,edad,genero,descripcion,mail,pwd) values(:id,:nombre,:edad,:genero,:descripcion,:mail,:pwd)");
            $sentencia->bindParam(':id')
        }
    }
?>