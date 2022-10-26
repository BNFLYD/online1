CREATE DATABASE linkdb;
USE linkdb;

-- DATOS DE LOS USUARIOS.
CREATE TABLE datos(
    id INT(30) NOT NULL AUTO_INCREMENT,
    mail VARCHAR(30) NOT NULL,
    nombre VARCHAR(30) NOT NULL,
    contraseña VARCHAR(30) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY (mail)
);

-- TABLA DE LINKS.
CREATE TABLE links(
    id INT(11) NOT NULL AUTO_INCREMENT,
    titulo VARCHAR (150) NOT NULL,
    url VARCHAR (255) NOT NULL,
    description TEXT,
    user_id INT(11),
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES datos(id),
    PRIMARY KEY (id)
);