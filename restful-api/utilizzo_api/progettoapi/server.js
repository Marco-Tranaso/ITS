const express = require('express');
const mysql2 = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

// dichiariamo su che porta risponderà il server web
const port = process.env.PORT || 3000;
// creiamo l’istanza del server
const app = express();

// Connessione al database MySql
const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'tranaso',
    database: 'db_api_rest'
});

// Middleware: per ogni richiesta verrà abilitato CORS e parsificato il body JSON
app.use(cors());
app.use(bodyParser.json());

// Endpoint per ottenere tutti gli utenti
app.get('/api/v1/users', (req, res) => {
    db.query('SELECT id, name, email FROM users', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Errore nel database');
        } else {
            res.json(results);
        }
    });
});

// Endpoint per ottenere un utente tramite ID
app.get('/api/v1/users/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT id, name, email FROM users WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Errore nel database');
        } else {
            res.json(results);
        }
    });
});

// Endpoint per creare un nuovo utente
app.post('/api/v1/users', (req, res) => {
    const { name, email } = req.body;
    const newUser = { name, email };

    db.query('INSERT INTO users SET ?', newUser, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Errore nel database');
        } else {
            res.status(201).json({ id: results.insertId, ...newUser });
        }
    });
});

// Endpoint per aggiornare un utente esistente
app.put('/api/v1/users/:id', (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;
    const updatedUser = { name, email };

    db.query('UPDATE users SET ? WHERE id = ?', [updatedUser, id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Errore nel database');
        } else if (results.affectedRows == 0) {
            res.status(404).json({ message: 'Utente non trovato' });
        } else {
            res.json({ id, ...updatedUser });
        }
    });
});

// Endpoint per eliminare un utente
app.delete('/api/v1/users/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM users WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Errore nel database');
        } else if (results.affectedRows == 0) {
            res.status(404).json({ message: 'Utente non trovato' });
        } else {
            res.json({ message: `Utente con id ${id} eliminato` });
        }
    });
});

// Avviare il server
app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});
