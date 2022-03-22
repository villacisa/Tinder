<?php

    $email = $_POST['email'];
    $pwd = $_POST['contrasenya'];
    
    $con = new mysqli();
    $con->connect('localhost','marc','marc','Tinder');

    if($con>connect_errno) {
        printf("Connect failed: %s\n", $mysqli->connect_error);
        exit();
    }
    $res=$con->query("select * from users where '".$email."'= 'mail' and 'pwd' = '".$pwd."'");
    if(mysqli_num_rows($res)==1) {
        echo 'ok';
    }
    else {
        echo "no hay coincidencias";
    }

?>