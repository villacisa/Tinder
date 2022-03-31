CREATE USER if not exists 'tinder'@'localhost' IDENTIFIED BY 'tinder' ;
GRANT ALL PRIVILEGES ON * . * TO 'tinder'@'localhost';
FLUSH PRIVILEGES;

Drop database if exists Tinder;
Create database if not exists Tinder;
use Tinder;

Create table users (
    id int auto_increment primary key,
    nombre varchar(10),
    edad int,
    genero varchar(10),
    descripcion varchar(200),
    mail varchar(35),
    pwd varchar (300)
);
Create table admin (
    id int auto_increment primary key,
    nombre varchar (10),
    pwd varchar (300)
);