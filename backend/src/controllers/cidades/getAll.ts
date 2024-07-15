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

  return res.status(StatusCodes.OK).send({ data: result });

};