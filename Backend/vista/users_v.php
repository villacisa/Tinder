<?php
    header("Content-Type: application/json; charset=utf-8");
    echo json_encode($users).PHP_EOL;
?>
<style>
#lista{
    clear: both;
}
</style>
<div id="lista">
<?php
    echo "<table>";
    foreach ($users as $actual){
        echo "<tr><td>".$usrs["id"] . "</td><td>";
        echo $usrs["nombre"] . "</td></tr>";
    }

    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, "https://private-325db3-martamillanlombrana.apiary-mock.com/users
    ");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    curl_setopt($ch, CURLOPT_HEADER, FALSE);

    $response = curl_exec($ch);
    curl_close($ch);

    var_dump($response);
?>
</div>
