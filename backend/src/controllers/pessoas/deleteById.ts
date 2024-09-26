import { Request, Response } from 'express';
import { PessoaProvider } from '../../database/providers/pessoa';
import { StatusCodes } from 'http-status-codes';


interface IPathParams {
  id: number
}

export const deleteById = async (req: Request<IPathParams>, res: Response) => {
  try {
    await PessoaProvider.deleteById(req.params.id);
    return res.status(StatusCodes.NO_CONTENT).send();
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ msg: error });
  }
};