CREATE USER 'tinder'@'localhost' IDENTIFIED BY 'tinder' if not exists;
GRANT ALL PRIVILEGES ON * . * TO 'tinder'@'localhost';
FLUSH PRIVILEGES;

Crate database Tinder if not exists;
use Tinder;

Create table users (
    id int auto_incremental primary key,
    nombre varchar(10),
    edad int,
    genero varchar(10),
    descripcion varchar(200),
    mail varchar(35),
    pwd varchar (300)
);
Create table admin (
    id int auto_incremental primary key,
    nombre varchar (10),
    pwd varchar (300)
);