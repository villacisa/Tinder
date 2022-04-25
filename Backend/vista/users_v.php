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
    foreach ($users as $usrs){
        echo "<tr><td>".$usrs["id"] . "</td><td>";
        echo $usrs["nombre"] . "</td></tr>";
    }
?>
</div>
