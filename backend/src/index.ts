import { server } from './server';

server.listen(3333, () => console.log(`[${process.env.NODE_ENV}] Aplicação Iniciada!`));
