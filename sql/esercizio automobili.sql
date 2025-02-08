/*

Ecco 10 query base che puoi utilizzare per esercitarti con SQL sulla [tabella `automobili`](../09_data/automobili.sql):

### 1. **Selezionare tutte le auto nella tabella**

*/

select * from automobili;

/*
### 2. **Visualizzare solo marca, modello e prezzo di tutte le auto**

*/

select marca,modello,prezzo from automobili;

/*### 3. **Trovare tutte le auto con un prezzo inferiore a 20.000 euro**
---
*/

select * from automobili where prezzo<20000;


/*### 4. **Selezionare tutte le auto con 5 posti**

*/
select * from automobili where posti=5;
/* ### 5. **Ordinare le auto in base al prezzo in ordine decrescente**

*/
select * from automobili order by prezzo desc;
/* ### 6. **Calcolare la media del prezzo delle auto**

*/
select avg(prezzo) as media_prezzo from automobili;
/*

### 7. **Contare quante auto hanno una cilindrata superiore a 1600cc**
*/
select count(*) as auto_grandi_cilindrata from automobili where cilindrata>1600;
/*
### 8. **Elencare tutte le marche presenti nella tabella senza duplicati**
---
*/
select distinct marca from automobili order by marca;
/*

### 9. **Trovare la marca e il modello dell'auto più costosa**

*/
select marca,modello from automobili order by prezzo desc limit 1;

/*
### 10. **Trovare tutte le auto con un prezzo tra 20.000 e 30.000 euro**
*/

select * from automobili where prezzo between 20000 and 300000 