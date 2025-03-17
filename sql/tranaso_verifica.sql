create database biblioteche_pubbliche;
use biblioteche_pubbliche;

create table biblioteche(
    codice int primary key auto_increment,
    nome varchar(200) not null,
    indirizzo varchar(200) not null,
    citta varchar(200) not null,
    numeri_telefono varchar(20) not null,
    orari_apertura text not null
);

create table libri(
    isbn varchar(20) not null primary key,
    titolo varchar(200) not null,
    autore varchar(200) not null,
    genere varchar(30) not null,
    anno_pubblicazione int not null,
    codice_biblioteca int not null,
    codice_copia int not null,
    stato_conservazione text,
    foreign key (codice_biblioteca) references biblioteche(codice)
);

create table utenti(
    codice int primary key auto_increment,
    nome varchar(100) not null,
    cognome varchar(100) not null,
    data_nascita date not null,
    numero_cellulare varchar(20) not null,
    biblioteche_iscritte text not null
);

create table prestiti(
    codice int primary key auto_increment,
    codice_utente int not null,
    codice_copia int not null,
    codice_biblioteca int not null,
    data_inizio date not null,
    data_scadenza date not null,
    data_restituzione date,
    foreign key (codice_utente) references utenti(codice),
    foreign key (codice_biblioteca) references biblioteche(codice)
);

create table prenotazioni(
    codice int primary key auto_increment,
    codice_utente int not null,
    codice_biblioteca int not null,
    isbn varchar(20) not null,
	unique(codice_utente, codice_biblioteca, isbn),
    data_prenotazione date not null,
    foreign key (codice_utente) references utenti(codice),
    foreign key (isbn) references libri(isbn),
    foreign key (codice_biblioteca) references biblioteche(codice)
);

create table eventi(
    codice int primary key auto_increment,
    titolo varchar(200) not null,
    descrizione text not null,
    data_evento date not null,
    orario time not null,
    codice_biblioteca int not null,
    numero_massimo_partecipanti int check (numero_massimo_partecipanti > 0),
    foreign key (codice_biblioteca) references biblioteche(codice)
);

INSERT INTO utenti (codice, nome, cognome, data_nascita, numero_cellulare, biblioteche_iscritte) VALUES
(1, 'Mario', 'Rossi', '1990-05-20', '3201234567', '4'),
(2, 'Luca', 'Bianchi', '1985-09-15', '3287654321', '1');


INSERT INTO biblioteche (nome, indirizzo, citta, numeri_telefono, orari_apertura) VALUES
('Biblioteca Centrale', 'Via Roma 1', 'Milano', '02-12345678', 'Lun-Ven 9:00-18:00'),
('Biblioteca Nord', 'Via Milano 22', 'Torino', '011-87654321', 'Lun-Sab 8:30-19:00');


INSERT INTO libri (isbn, titolo, autore, genere, anno_pubblicazione, codice_biblioteca, codice_copia, stato_conservazione) VALUES
('978-3-16-148410-0', 'Il Signore degli Anelli', 'J.R.R. Tolkien', 'Fantasy', 1954, 1, 1, 'Ottimo'),
('978-88-04-48969-0', 'La Divina Commedia', 'Dante Alighieri', 'Classico', 1321, 1, 2, 'Buono'),
('978-0-06-112008-4', 'Il Buio Oltre la Siepe', 'Harper Lee', 'Narrativa', 1960, 2, 3, 'Ottimo');


INSERT INTO prestiti (codice_utente, codice_copia, codice_biblioteca, data_inizio, data_scadenza, data_restituzione) VALUES
(1, 1, 1, '2024-03-01', '2024-03-15', NULL),  
(2, 2, 1, '2024-02-25', '2024-03-10', '2024-03-05'); 





INSERT INTO prenotazioni (codice_utente, codice_biblioteca, isbn, data_prenotazione) VALUES
(1, 1, '978-0-06-112008-4', '2024-03-07');


INSERT INTO eventi (titolo, descrizione, data_evento, orario, codice_biblioteca, numero_massimo_partecipanti) VALUES
('Incontro con autore', 'Presentazione del nuovo libro di Marco Verdi', '2024-03-20', '17:30', 1, 50),
('Laboratorio di lettura', 'Sessione di lettura ad alta voce per bambini', '2024-03-25', '10:00', 2, 30);


-- Query di test da eseguire

select * from biblioteche b join libri l on b.nome=l.titolo where nome="Biblioteca Centrale";

