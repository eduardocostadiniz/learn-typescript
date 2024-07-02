import { Router } from 'express';
import { CidadesController } from './../controllers';


const router = Router();

router.get('/', (req, res) => {
  console.log(req.body);  
  return res.send({ msg: 'Online' });
});


router.post('/cidades', CidadesController.create);


export { router };