Crate database Tinder if not exists;
use Tinder;

Create table users (
    id int autoincremental primary key,
    nombre varchar(10),
    edad int,
    genero varchar(10),
    descripcion varchar(200)
);