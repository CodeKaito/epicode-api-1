import express from 'express';
import { config } from 'dotenv';
import mongoose from 'mongoose';

// Inizializza la gestione del file env
config();

// Crea la porta
const PORT = process.env.PORT || 5001;

// Crea il server
const app = express();

// Abilita la comunicazione con dati JSON
app.use(express.json());

// Avvio del server
app.listen(PORT, () => {
    console.log(`Listening to: ${PORT}`);
});
