-- 1. Selezionare tutti i paesi e i loro dati
select * from `country-data`;
-- 2. Selezionare solo il nome dei paesi
select country from `country-data`;
-- 3. Selezionare i paesi con un'aspettativa di vita superiore a 70 anni
select * from `country-data` where life_expec>70;
-- 4. Selezionare i paesi con un PIL pro capite maggiore di 10.000
select * from `country-data` where income>10000;
-- 5. Trovare i paesi con un tasso di mortalità infantile inferiore a 20
select * from `country-data` where child_mort<20;
-- 6. Ordinare i paesi per reddito pro capite in ordine decrescente
select * from `country-data` order by gdpp desc;
-- 7. Ordinare i paesi per aspettativa di vita in ordine crescente
select * from `country-data` order by life_expec asc;
-- 8. Selezionare i paesi con un tasso di fertilità superiore a 5
select * from `country-data` where total_fer>5;
-- 9. Trovare i paesi con una spesa sanitaria superiore al 10% del PIL
select * from `country-data` where health>10;
-- 10. Selezionare i paesi con un'inflazione negativa (deflazione)
select * from `country-data` where inflation<0;
-- 11. Trovare i paesi con esportazioni che superano il 50% del PIL
select * from `country-data` where exports>50;
-- 12. Trovare i paesi con importazioni maggiori delle esportazioni
select * from `country-data` where imports>exports;
-- 13. Selezionare i paesi con un PIL pro capite compreso tra 5.000 e 10.000
select * from `country-data` where gdpp between 5000 and 10000;
-- 14. Trovare i paesi con un tasso di fertilità inferiore a 2 e un'aspettativa di vita superiore a 75 anni
select * from `country-data` where total_fer<2 and life_expec>75;
-- 15. Selezionare i paesi con un tasso di mortalità infantile maggiore di 100
select * from `country-data` where child_mort >100;
-- 16. Trovare i paesi con reddito pro capite maggiore di 15.000 e inflazione inferiore a 5%
select * from `country-data` where income > 15000 and inflation<5;
-- 17. Ordinare i paesi per spesa sanitaria in ordine decrescente
select * from `country-data` order by health asc;
-- 18. Selezionare i paesi con un PIL pro capite inferiore a 2.000
select * from `country-data` where gdpp<2000;
-- 19. Trovare i paesi con esportazioni e importazioni combinate superiori al 90% del PIL
select * from `country-data` where (exports+imports)> 90;
-- 20. Trovare i 3 paesi con il più alto rapporto tra spesa sanitaria e reddito pro capite
select * from `country-data` order by health/gdpp desc limit 3 ;
-- 21. Trovare il rapporto tra fertilità totale e aspettativa di vita per ogni paese e ordinarlo in ordine crescente
select * from `country-data` order by total_fer/life_expec asc;
-- 22. Calcolare la media del tasso di fertilità per i paesi con un’aspettativa di vita superiore a 70 anni
select country, avg(total_fer) from `country-data` where life_expec>70;
-- 23. Trovare i paesi con il massimo e il minimo reddito pro capite
select * from `country-data` where gdpp= (select max(gdpp) from `country-data`) or  gdpp = (select MIN(gdpp) from countries_data);
-- 24. Contare il numero di paesi con inflazione negativa
select count(*) from `country-data` where inflation<0;
-- 25. Trovare i 5 paesi con il PIL pro capite (gdpp) più alto
select * from `country-data` order by gdpp desc;
-- 26. Calcolare la somma delle esportazioni e delle importazioni per ciascun paese
select country, (exports+imports) as somma_esportazioni from `country-data` where (exports+imports);
-- 27. Trovare i paesi dove il totale delle esportazioni è almeno il doppio delle importazioni
select * from `country-data` where exports >= 2*imports;
-- 28. Calcolare il PIL pro capite medio (gdpp) per ogni gruppo di aspettativa di vita (fasce di 10 anni)
select floor((life_expec/10) )*10 as aspettativa_vita, avg (gdpp) as avg_gdpp from `country-data` group by aspettativa_vita order by aspettativa_vita;
-- 29. Trovare i paesi con un tasso di mortalità infantile superiore alla media globale
select * from `country-data` where child_mort > (select avg(child_mort) from `country-data`);
-- 30. Trovare i paesi con il massimo tasso di mortalità infantile in ogni fascia di reddito
 
