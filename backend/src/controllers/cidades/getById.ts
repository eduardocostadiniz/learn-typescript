import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

interface IParamsGetById {
  id: number
}

export const getById = (req: Request<IParamsGetById>, res: Response) => {
  console.log('getById');

  return res.status(StatusCodes.OK).send({ msg: 'getById' });

};