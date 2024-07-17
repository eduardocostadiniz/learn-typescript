import { Request, Response } from 'express';
import { PessoaProvider } from '../../database/providers/pessoa';
import { StatusCodes } from 'http-status-codes';

export const getAll = async (req: Request, res: Response) => {
  try {
    const result = await PessoaProvider.getAll();
    return res.status(StatusCodes.OK).send({ data: result });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ msg: error });
  }
};