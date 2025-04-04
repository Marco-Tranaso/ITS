use esercitazioni;
/*
1. Inserimento record nelle tabelle "americhe", "africa" ed "europa":

Per la tabella americhe, inserire i seguenti dati:

Stati Uniti, New York
Canada, Ottawa
Brasile, Brasilia
Per la tabella africa, inserire i seguenti dati:

Egitto, Il Cairo
Sudafrica, Port Elizabeth
Marocco, Rabat
Per la tabella europa, inserire i seguenti dati:

Italia, Roma
Francia, Lione
Germania, Berlino
Scrivere un'istruzione INSERT unica per ciascuna tabella (tre query totali).

*/

INSERT INTO americhe(stato,capitale) VALUES ('Canada','Ottawa'),('Brasile','Brasiliia'), ('Stati Uniti','New York');
INSERT INTO europa (stato,capitale) VALUES ('Italia','Roma'),('Francia','Lione'), ('Germania','Berlino');
INSERT INTO africa(stato,capitale) VALUES ('Egitto','Il Cairo'),('Sudafrica','Pot Elizabeth'), ('Marocco','Rabat');

SELECT 'americhe' AS continente, stato, capitale FROM americhe
UNION
SELECT 'africa' AS continente, stato, capitale FROM africa
UNION
SELECT 'europa' AS continente, stato, capitale FROM europa;


/*2. Aggiornamento della capitale degli Stati Uniti:
Aggiorna il record relativo alla capitale degli Stati Uniti nella tabella americhe con il valore corretto: "Washington D.C.".

Scrivere l'istruzione SQL.

*/

UPDATE americhe set capitale = 'Washington D.C' where id=3;

/*3. Aggiornamento della capitale del Sudafrica:
Aggiorna il record relativo alla capitale del Sudafrica nella tabella africa con il valore corretto: "Città del Capo".

Scrivere l'istruzione SQL.

*/

UPDATE africa set capitale = 'Città del Capo' where id=2;

/*4. Aggiornamento della capitale della Francia:
Aggiorna il record relativo alla capitale della Francia nella tabella europa con il valore corretto: "Parigi".

Scrivere l'istruzione SQL.

*/

UPDATE europa set capitale = 'Parigi' where id=1;


/*5. Inserimento record nella tabella "libro":
Inserire i seguenti record nella tabella libro utilizzando un'unica istruzione INSERT:
1.

Titolo: Marcovaldo
Prezzo: 13.00
Pagine: 204
Editore ID: 1
Titolo: La coscienza di Zeno
Prezzo: 14.00
Pagine: 664
Editore ID: 2
Titolo: Furore
Prezzo: 12.50
Pagine: 478
Editore ID: 1
Titolo: Il Piccolo Principe
Prezzo: 10.50
Pagine: 124
Editore ID: 1
Scrivere l'istruzione SQL.
*/

INSERT INTO libro (titolo, prezzo, pagine) 
VALUES 
('Marcovaldo', 13.00, 204),
('La coscienza di Zeno', 14.00, 664),
('Furore', 12.50, 478),
('Il Piccolo Principe', 10.50, 124);

/*
6. Inserimento record nella tabella "clienti":
Inserire i seguenti record nella tabella clienti utilizzando un'unica istruzione INSERT:

Nome: Pippo
Cognome: Costanzo
Telefono: 3212345678
Email: pippo.costanzo@gmail.com
Provincia: TO
Nome: Maria
Cognome: Filippi
Telefono: 3332345687
Email: maria.filippi@gmail.com
Provincia: MI
Nome: Mario
Cognome: Liberato
Telefono: 3357000678
Email: mario.liberato@gicloud.com
Provincia: CN
Nome: Grazia
Cognome: Alcanto
Telefono: 3212345678
Email: graziaalcanto@gmail.com
Provincia: MI
Nome: Francesco
Cognome: Franco
Telefono: 3481112345
Email: franco.francesco@icloud.com
Provincia: MI
Scrivere l'istruzione SQL.
*/


INSERT INTO clienti (nome, cognome, telefono, email, provincia) VALUES ('Pippo', 'Costanzo', '3212345678', 'pippo.costanzo@gmail.com', 'TO'), ('Maria', 'Filippi', '3332345687', 'maria.filippi@gmail.com', 'MI'), ('Mario', 'Liberato', '3357000678', 'mario.liberato@gicloud.com', 'CN'), ('Grazia', 'Alcanto', '3212345678', 'graziaalcanto@gmail.com', 'MI'), ('Francesco', 'Franco', '3481112345', 'franco.francesco@icloud.com', 'MI');

/*
7. Aggiornamento della provincia nella tabella "clienti":
Aggiorna il campo provincia con il valore "AL" per tutti i clienti nella tabella clienti la cui provincia attuale è "MI".

Scrivere l'istruzione SQL.

*/

UPDATE clienti
SET provincia = 'AL'
WHERE provincia = 'MI';


/*8. Eliminazione record nella tabella "clienti":
Cancella dalla tabella clienti tutti i record in cui il campo provincia ha il valore "AL".

Scrivere l'istruzione SQL.

*/

DELETE from clienti where provincia='AL';