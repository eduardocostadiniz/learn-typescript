import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

interface IParamsDeleteById {
  page: number
}

export const deleteById = (req: Request<IParamsDeleteById>, res: Response) => {
  console.log('deleteById');

  return res.status(StatusCodes.OK).send({ msg: 'deleteById' });

};