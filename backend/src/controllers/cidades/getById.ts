import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CidadesProvider } from '../../database/providers/cidade';

interface IParamsGetById {
  id: number
}

export const getById = async (req: Request<IParamsGetById>, res: Response) => {
  const result = await CidadesProvider.getById(req.params.id);

  return res.status(StatusCodes.OK).send({ data: result });

};