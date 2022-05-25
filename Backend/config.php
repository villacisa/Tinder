<?php
define('USER', 'root');
define('PASSWORD', '');
define('HOST', 'localhost');
define('DATABASE', 'Tinder');
 
try {
    $connection = new PDO("mysql:host=".HOST.";dbname=".Tinder, USER, PASSWORD);
} catch (PDOException $e) {
    exit("Error: " . $e->getMessage());
}
?>