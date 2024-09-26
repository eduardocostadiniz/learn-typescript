import { Request, Response } from 'express';
import { PessoaProvider } from '../../database/providers/pessoa';
import { StatusCodes } from 'http-status-codes';


interface IPathParams {
  id: number
}

export const getById = async (req: Request<IPathParams>, res: Response) => {
  try {
    const result = await PessoaProvider.getById(req.params.id);
    return res.status(StatusCodes.OK).send({ data: result });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ msg: error });
  }
};