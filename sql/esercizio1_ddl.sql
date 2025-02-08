CREATE TABLE prodotti(
id int primary key auto_increment,
nome varchar(50),
prezzo decimal (6,2),
quantità int
);

ALTER TABLE prodotti
ADD COLUMN descrizione TEXT
AFTER nome;

CREATE TABLE ordini(
id int primary key auto_increment,
data_ordine datetime,
totale decimal (10,2),
id_cliente int
);

CREATE TABLE clienti(
id int primary key auto_increment,
nome varchar(30),
cognome varchar(30),
email varchar(100),
provincia varchar(2)
);

alter table clienti
modify column cognome varchar(50),
add column telefono varchar(20)
after cognome;


CREATE TABLE americhe(
id int primary key auto_increment,
stato varchar(50),
capitale varchar(50)
);
CREATE TABLE europa(
id int primary key auto_increment,
stato varchar(50),
capitale varchar(50)
);
CREATE TABLE africa(
id int primary key auto_increment,
stato varchar(50),
capitale varchar(50)
);
CREATE TABLE libro(
id int primary key auto_increment,
titolo varchar(100),
prezzo decimal (6,2),
pagine int,
id_editore int
);

RENAME TABLE clienti to customers