<?php
    require_once("./model/users_m.php");
    class Users{    
        public function __construct($params, $body){
            $method = array_shift($params);
            switch ($method){
                case "GET":
                    $this->getUser($params);
                    break;
                case "POST":
                    $this->postUser($params, $body);
                    break;
                case "DELETE":
                    $this->deleteUser($params);
                    break;
                default:
                    $this->notImplementedMethodUser($params, $body, $method);
                    break;
            }
        }

        private function getUser($params){
            $model = new Users_model();
            if (count($params) == 0){
                $users = $model->getUsers();
            }else{
                switch (strtolower($params[0])){
                    case "id":
                        $users = $model->getUserById($params[1]);
                        break;
                    case "genero":
                        $users = $model->getUsersByGender($params[1]);
                        break;
                    case "edad":
                        $baix = 18;
                        $alt = 30;
                        if (count($params)>2){
                            $baix = $params[1];
                            $alt = $params[2];
                        }else{
                            $alt = $params[1];
                        }
                        $peliculas = $model->getUsersByAge($baix, $alt);
                        break;
                    default:
                        echo "bad request";
                }
            }
            require_once("./vista/users_v.php");
        }

        private function postUser($params, $body){
            $model = new Users_model();
            $newId = $model->appendUser($body);
            $users = $model->getUserById($newId);
            http_response_code(201);
            require_once("./vista/users_v.php");
        }



        private function deleteUser($params){
            $model = new User_model();
            if (count($params) == 0){
                echo "bad request";
            }else{
                switch (strtolower($params[0])){
                    case "id":
                        $peliculas = $model->deleteUserById($params[1]);
                        break;
                    default:
                        echo "bad request";
                }
            }
            http_response_code(204);
        }

        private function notImplementedMethodUser($params, $method){
            header('Content-Type: application/json');
            echo json_encode(array("error"=> "Not implemented method!", "method" => $method, "params" => $params)).PHP_EOL;
        }
    }
?>