import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CidadesProvider } from '../../database/providers/cidade';

interface IQueryGetAll {
  page: number
  limit: number
  filter: string
}

export const getAll = async (req: Request<{}, {}, {}, IQueryGetAll>, res: Response) => {

  const result = await CidadesProvider.getAll();
  const count = await CidadesProvider.count();  

  return res.status(StatusCodes.OK).header('x-total-count', String(count)).send({ data: result });

};