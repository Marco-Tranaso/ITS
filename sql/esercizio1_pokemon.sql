-- 1. Recuperare tutti i Pokémon con il tipo principale "Fire"

select * from pokemon where `Type 1` = "Fire";
-- 2. Selezionare il nome e il tipo principale dei Pokémon con una velocità superiore a 100

select Name,`Type 1` from pokemon where Speed>100;

-- 3. Contare quanti Pokémon sono considerati "Legendary"

select count( * ) from pokemon where Legendary=True;

-- 4. Recuperare i Pokémon con attacco superiore a 120 e difesa superiore a 100

select * from pokemon where `Attack` > 120 and `Defense` > 100;
-- 5. Ottenere tutti i Pokémon della prima generazione

select `Type 1` from pokemon; 

select * from pokemon where Generation= 1;
-- 6. Mostrare i nomi e il totale di statistiche dei Pokémon ordinati per valore totale in ordine decrescente


select Name,total from pokemon order By Total desc;
-- 7. Mostrare i Pokémon che hanno entrambi i tipi "Grass" e "Poison"

select * from pokemon where `Type 1`= "Grass" and `Type 2` ="Poison";
-- 8. Recuperare i Pokémon con punti salute (HP) inferiori a 50, ordinati per HP in ordine crescente

select `Name` , HP from pokemon where HP<50 order by HP ASC;

-- 9. Trovare i Pokémon con il valore totale pari o superiore a 500, ordinati per tipo principale e poi per nome

select `Type 1` , `Name`, Total from pokemon where Total>=500 order by `Type 1`, Total , `Name`;

-- 10. Ottenere tutti i Pokémon di tipo principale "Water" con una velocità superiore a 80

select * from pokemon where `Type 1` = "Water" and Speed>80;
-- 11. Visualizzare i tre Pokémon con il valore di difesa più alto

select * from pokemon order by Defense desc limit 3;
-- 12. Recuperare il nome e il tipo principale dei Pokémon che hanno un attacco maggiore della loro difesa

select Name, `Type 1` from pokemon where Attack>Defense;
-- 13. Ottenere i Pokémon di tipo "Dragon" che appartengono alla terza generazione

select * from pokemon where `Type 1` = "Dragon" and Generation=3;
-- 14. Visualizzare i Pokémon non leggendari che hanno una velocità massima tra 80 e 100

select * from Pokemon where Legendary= False and Speed>80 and Speed<100;
-- 15. Trovare i Pokémon con il minor valore totale tra quelli della prima generazione con entrambi i tipi definiti (Type 1 e Type 2 non NULL)

select * from pokemon where Generation=1 AND `Type 1` IS NOT NULL AND `Type 2` is not null order by Total ASC;

-- 16. Trovare i 5 Pokémon con il miglior rapporto Attacco/Difesa

select * from pokemon order by Attack/Defense DESC limit 5;

-- 17. Ottenere i Pokémon con il valore totale più alto per ogni generazione
select MAX(Total) from pokemon GROUP BY Generation order by Generation ASC;
-- 18. Calcolare la media di attacco per ogni tipo principale

select avg(Attack) as media_attacco from pokemon group by `Type 1` order by media_attacco desc ;

-- 19. Contare i Pokémon per ogni generazione

select generation,count(*) as Conto from pokemon group by generation;
-- 20. Contare quanti Pokémon ci sono per ogni combinazione di tipo principale e secondario
SELECT `Type 1`, `Type 2`, COUNT(*) AS num_pokemon FROM pokemon GROUP BY `Type 1`, `Type 2`;


-- 21. Calcolare il valore medio di HP, Attacco e Difesa per Pokémon leggendari e non leggendari
SELECT Legendary, AVG(HP) AS avg_hp, AVG(Attack) AS avg_attack, AVG(Defense) AS avg_defense FROM pokemon GROUP BY Legendary;

-- 22. Creare una tabella virtuale con tutti i possibili tipi distinti (combinazioni di Type 1 e Type 2) e il numero di Pokémon per ciascuna combinazione
SELECT DISTINCT `Type 1`, `Type 2`, COUNT(*) AS num_pokemon FROM pokemon group by `Type 1`, `Type 2`;

-- 23. Trovare i Pokémon leggendari con il massimox1
 valore di ogni statistica (HP, Attack, Defense, Sp. Atk, Sp. Def, Speed)

SELECT Legendary, MAX(HP) AS max_hp, MAX(Attack) AS max_attack, MAX(Defense) AS max_defense, MAX(`Sp. Atk`) AS max_sp_atk, MAX(`Sp. Def`) AS max_sp_def, MAX(Speed) AS max_speed FROM pokemon WHERE Legendary = 'True' GROUP BY Legendary;


-- 24. Creare un elenco di Pokémon raggruppati per generazione, calcolando il totale complessivo delle statistiche per ciascuna generazione
select sum(Total) as Totale from pokemon group by Generation;
-- 25. Contare il numero di Pokémon leggendari e non leggendari per ciascun tipo principale

SELECT `Type 1`, Legendary, COUNT(*) AS num_pokemon FROM pokemon GROUP BY `Type 1`, Legendary;


-- 26. Creare una classifica per tipo principale (Type 1) basata sulla media di attacco dei Pokémon di quel tipo
SELECT `Type 1`, AVG(Attack) AS avg_attack FROM pokemon GROUP BY `Type 1` ORDER BY avg_attack DESC;

-- 27. Creare un elenco con il numero di Pokémon per ciascuna combinazione di generazione e stato leggendario, ordinato per generazione e numero di Pokémon
SELECT Generation, Legendary, COUNT(*) AS num_pokemon FROM pokemon GROUP BY Generation, Legendary ORDER BY Generation, num_pokemon DESC;

-- 28. Elencare tutti i Pokémon con il valore totale massimo per ogni combinazione di tipo principale (Type 1) e secondario (Type 2)


-- 29. Mostrare i Pokémon con velocità superiore alla media della tabella

SELECT Name, AVG(Speed) AS media_speed FROM pokemon GROUP BY Name HAVING AVG(Speed) > 75;

-- 30. Elencare tutti i Pokémon con una velocità maggiore della media per il loro tipo principale (Type 1)

