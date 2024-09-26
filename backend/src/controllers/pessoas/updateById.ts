import { Request, Response } from 'express';
import { PessoaProvider } from '../../database/providers/pessoa';
import { StatusCodes } from 'http-status-codes';
import { IPessoa } from 'src/database/models';


interface IBodyProps extends Omit<IPessoa, 'id'> {}
interface IPathParams {
  id: number
}

export const updateById = async (req: Request<IPathParams, {}, IBodyProps>, res: Response) => {
  try {
    await PessoaProvider.updateById(req.params.id, req.body);
    return res.status(StatusCodes.NO_CONTENT).send();
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ msg: error });
  }
};