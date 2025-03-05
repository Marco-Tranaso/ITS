create database EsercizioSQL;

use EsercizioSQL;

create user 'esercizio_user'@'localhost' identified by 'password';
grant all on EsercizioSQL.* to 'esercizio_user'@'localhost';

flush privileges;
