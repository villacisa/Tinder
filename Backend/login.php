<?php

    $email = $_POST['email'];
    $pwd = $_POST['contrasenya'];
    
    $con = new mysqli();
    $con->connect('localhost','marc','marc','Tinder');
    
?>