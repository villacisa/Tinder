<?php
class App{
    function App(){
        echo "<p>Nueva app</p>";
        $url = $_GET['url'];
        $url = rtrim($url, '/');
        $url = explode('/',$url);
        $archivo="./controlador/".$url[0].".php";
        
        if (file_exists($archivo)){
            require_once $archivo;
            $control = new $url[0];
            $aux = sizeof($ur);
            if ($aux == 2) {
                $control->{$url[1]}();
            }
            if($aux==3) {
                $control->{$url[1]}($url[2]);
            }
        }
    }
}
?>
