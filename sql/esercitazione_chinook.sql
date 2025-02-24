select * from employee;

select a.FirstName,a.LastName, concat(b.FirstName,' ' , b.LastName) as 'responsabile' from employee as a 
left join employee as b on a.ReportsTo=b.EmployeeId;


-- Conta il numero totale di clienti.
select count(CustomerId) as numero_clienti from customer ;
-- Calcola il totale delle vendite registrate nella tabella Invoice.
select sum(total) from invoice;
-- Trova il prezzo massimo tra i brani nella tabella Track.
select max(UnitPrice) from track;
-- Trova il numero di dipendenti per ogni città.
select count(EmployeeId) as numero_dipendenti , City from employee group by City;
-- Trova il prezzo medio per unità dei brani.
select avg(UnitPrice) from track;

-- Trova i dettagli degli album e degli artisti associati.
select a.ArtistId, Title, art.Name from album a 
-- join artist as art on a.artistId=art.artistId;
join artist as art using (artistId);
-- Trova i brani e i loro generi.
select t.Name, gen.Name from track t join genre as gen using(genreId) ;
-- Trova quanti brani ci sono per ogni genere
select gen.Name, COUNT(*) as genere_brani 
from track t join genre 
as gen using (genreId) group by gen.Name WITH ROLLUP;
-- Trova i dettagli delle fatture e dei clienti.
select BillingCountry,c.Company,sum(i.total) as somma
from customer c
join invoice i on c.customerID=i.customerID
group by BillingCountry,c.Company with rollup
order by BillingCountry,somma;
-- Trova le playlist e i brani associati.


-- Trova i brani con il rispettivo tipo di supporto.