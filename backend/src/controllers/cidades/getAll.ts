import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

interface IQueryGetAll {
  page: number
  limit: number
  filter: string
}

export const getAll = (req: Request<{}, {}, {}, IQueryGetAll>, res: Response) => {
  console.log('Get All');
  console.log(req.query);

  return res.status(StatusCodes.OK).send({ msg: 'OK' });

};