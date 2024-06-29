import { Router } from 'express';
import { StatusCodes} from 'http-status-codes';


const router = Router();

router.get('/', (req, res) => {
  console.log(req.body);  
  return res.send({ msg: 'Olá Mundo' });
});

router.post('/teste', (req, res) => {
  console.log(`QUERY: ${req.query}`);
  console.log(`BODY: ${req.body}`);
  return res.status(StatusCodes.CREATED).send({ query: req.query, body: req.body });
});


export { router };