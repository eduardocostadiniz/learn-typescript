import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CidadesProvider } from '../../database/providers/cidade';

interface IParamsUpdateById {
  id: number
}

interface IBodyUpdateById {
  nome: string
}

export const updateById = async (req: Request<IParamsUpdateById, {}, IBodyUpdateById>, res: Response) => {
  await CidadesProvider.updateById(req.params.id, req.body);

  return res.status(StatusCodes.NO_CONTENT).send();

};