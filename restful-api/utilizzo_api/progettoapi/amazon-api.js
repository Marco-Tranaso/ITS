const express = require('express');
const mysql2 = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

// dichiariamo su che porta risponderà il server web
const port = process.env.PORT || 4000
//creiamo l’istanza del server
const app = express();

// Connessione al database MySql
const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'tranaso',
    database: 'db_my_amazon'
});

// Middleware, per ogni richiesta verrà abilitato CORS e verrà parsificato il body JSON
app.use(cors());
app.use(bodyParser.json());
// Creare un primo endpoint per la risorsa (ad esempio, seleziona tutti gli utenti)
app.get('/api/v1/users', (req, res) => {
 // Eseguiamo entrambe le query in parallelo
 db.query('SELECT id, nome, cognome, datanascita FROM t_utente', (err, utentiResults) => {
    if (err) {
        console.error(err);
        return res.status(500).send('Errore nel database');
    }

    db.query('SELECT * FROM t_prodotti', (err, prodottiResults) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Errore nel database');
        }

        // Rispondiamo al client con i risultati di entrambe le query
        res.json({
            utenti: utentiResults,
            prodotti: prodottiResults
        });
    });
 });
});

// Avviare il server
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});