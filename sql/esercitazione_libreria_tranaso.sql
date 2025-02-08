select * from libro,editore
where libro.editore_id = editore.id;

select concat (a.nome, ' ',a.cognome) as "Autore", l.titolo,l.prezzo from autore_libro al join autore a on al.autore_id=a.id join libro l on al.libro_id=l.id join editore e on l.editore_ld=e.id;


-- 1. Elenco di tutti i libri
select * from libro;
-- 2. Elenco di tutti gli autori
select * from autore;
-- 3. Elenco di tutti gli editori
select * from editore;
-- 4. Selezionare il titolo e il prezzo dei libri ordinati per prezzo crescente
select titolo,prezzo from libro order by prezzo ASC;
-- 5. Selezionare i libri con un prezzo superiore a 15€
select titolo,prezzo from libro where prezzo>15;
-- 6. Contare il numero totale di libri nel database
select count(*) as numero_totale_libri from libro ;
-- 7. Ottenere la media delle pagine dei libri
select avg(pagine) from libro;
-- 8. Trovare il libro più costoso
select max(prezzo) from libro;
-- 9. Trovare il libro meno costoso
select min(prezzo) from libro ;
-- 10. Contare il numero di autori per nazione
select nazionalita,count(*) as numer_autori_nazione from autore group by nazionalita;
-- 11. Elenco dei libri con più di 500 pagine
select * from libro where pagine>500;
-- 12. Elenco degli autori italiani
select * from autore where nazionalita="it";
-- 13. Trovare tutti i libri pubblicati da un determinato editore (es. Mondadori) 
SELECT l.titolo FROM libro l JOIN editore e ON l.editore_id = e.id WHERE e.nome = "Mondadori";
-- 14. Contare il numero di libri per ogni editore
select nome,count(*) as numero_libri from libro l join editore e ON l.editore_id=e.id group by nome;
-- 15. Trovare i libri con più di 400 pagine pubblicati da un determinato editore
SELECT titolo,nome,pagine FROM libro l JOIN editore e ON l.editore_id = e.id WHERE e.nome = "Mondadori" and pagine>400;
-- 16. Trovare il numero di autori che hanno scritto almeno un libro
SELECT nome,count(al.libro_id) FROM autore_libro al JOIN autore a on al.autore_id=a.id group by a.id having count(al.libro_id)>=1;
-- 17. Trovare gli autori che hanno scritto più di un libro
SELECT nome,count(al.libro_id) FROM autore_libro al JOIN autore a on al.autore_id=a.id group by a.id having count(al.libro_id)>1;
-- 18. Trovare gli autori che non hanno scritto alcun libro
SELECT nome,count(al.libro_id) FROM autore_libro al JOIN autore a on al.autore_id=a.id group by a.id having count(al.libro_id)=0;
-- 19. Selezionare i libri con più di un autore
SELECT nome,count(a.nome) FROM autore a JOIN autore_libro al on a.id=al.autore_id group by a.id having count(a.nome)>1;
-- 20. Contare il numero di libri per autore
SELECT nome,count(al.libro_id) FROM autore_libro al JOIN autore a on al.autore_id=a.id group by a.id;
-- 21. Ottenere la somma totale del prezzo di tutti i libri
select sum(prezzo) as somma_prezzo from libro;
-- 22. Contare il numero di libri con un prezzo compreso tra 10 e 20 euro
-- 23. Trovare il prezzo medio dei libri per editore
-- 24. Trovare gli autori con più libri pubblicati da editori diversi
-- 25. Trovare i libri con il prezzo più alto per ogni editore
-- 26. Ottenere i 5 libri più costosi
-- 27. Contare il numero di libri pubblicati da ciascun editore con più di 3 libri
-- 28. Selezionare il nome degli editori che hanno pubblicato almeno un libro con più di 500 pagine
-- 29. Trovare gli autori che hanno scritto libri pubblicati da più di un editore
-- 30. Contare il numero di libri per ogni autore con più di 1 libro