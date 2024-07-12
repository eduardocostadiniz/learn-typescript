import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

interface IParamsUpdateById {
  id: number
}

interface IBodyUpdateById {
  nome: string
}

export const updateById = (req: Request<IParamsUpdateById, {}, IBodyUpdateById>, res: Response) => {
  console.log('updateById');

  return res.status(StatusCodes.OK).send({ msg: 'updateById' });

};