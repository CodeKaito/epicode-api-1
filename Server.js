import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import cors from 'cors';

import { Routes } from './routes/Routes.js';

config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`Connected to db`);
        app.use("/api", Routes);
    } catch (error) {
        console.log(`Error connecting to mongoose: ${error.message}`);
    }
};

app.get("/", (req, res) => {
    res.send('Hello from Epicode!');
});

app.get("/codekaito", (req, res) => {
    res.send('Hello from Codekaito!');
});

app.get("/test", (req, res) => {
    res.send('If you get this message, your API ENDPOINT is working!');
});

const server = app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

startServer();

export default server; // Se vuoi esportare il server per altri utilizzi, come i test.
