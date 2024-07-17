import { Router } from 'express';
import { CidadesController, PessoasController } from './../controllers';


const router = Router();

router.get('/', (req, res) => {
  console.log(req.body);
  return res.send({ msg: 'Online' });
});

// Endpoints de Cidades
router.get('/cidades', CidadesController.getAll);
router.post('/cidades', CidadesController.createBodyValidator, CidadesController.create);
router.get('/cidades/:id', CidadesController.getById);
router.put('/cidades/:id', CidadesController.updateById);
router.delete('/cidades/:id', CidadesController.deleteById);

// Endpoints de Pessoas
router.get('/pessoas', PessoasController.getAll);
router.post('/pessoas', PessoasController.create);
router.get('/pessoas/:id', PessoasController.getById);
router.put('/pessoas/:id', PessoasController.updateById);
router.delete('/pessoas/:id', PessoasController.deleteById);

export { router };