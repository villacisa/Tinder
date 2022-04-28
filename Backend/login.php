<?php

    /*$email = $_POST['email'];
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
    }*/

    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, "https://private-325db3-martamillanlombrana.apiary-mock.com/login");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    curl_setopt($ch, CURLOPT_HEADER, FALSE);

    curl_setopt($ch, CURLOPT_POST, TRUE);

    curl_setopt($ch, CURLOPT_POSTFIELDS, "{
        \"username\": \"testu\",
        \"password\": \"testp\"
    }");

    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        "Content-Type: application/json",
        "Api-key: "key"")
    );

    $response = curl_exec($ch);
    echo ($response);
    curl_close($ch);

    var_dump($response);
?>