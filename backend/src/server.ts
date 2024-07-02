import 'dotenv/config';
import './shared/services/translations';
import express from 'express';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

app.listen(3333, () => console.log(`[${process.env.NODE_ENV}] Aplicação Iniciada!`));
