import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CidadesProvider } from '../../database/providers/cidade';

interface IParamsDeleteById {
  id: number
}

export const deleteById = async (req: Request<IParamsDeleteById>, res: Response) => {
  await CidadesProvider.deleteById(req.params.id);

  return res.status(StatusCodes.NO_CONTENT).send();

};