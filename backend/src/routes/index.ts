import { Router } from 'express';
import { CidadesController } from './../controllers';


const router = Router();

router.get('/', (req, res) => {
  console.log(req.body);
  return res.send({ msg: 'Online' });
});


router.get('/cidades', CidadesController.getAll);
router.post('/cidades', CidadesController.createBodyValidator, CidadesController.create);
router.get('/cidades/:id', CidadesController.getById);
router.put('/cidades/:id', CidadesController.updateById);
router.delete('/cidades/:id', CidadesController.deleteById);


export { router };