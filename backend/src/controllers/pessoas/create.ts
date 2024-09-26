import { Request, Response } from 'express';
import { PessoaProvider } from '../../database/providers/pessoa';
import { StatusCodes } from 'http-status-codes';
import { IPessoa } from 'src/database/models';


interface IBodyProps extends Omit<IPessoa, 'id'> { }


export const create = async (req: Request<{}, {}, IBodyProps>, res: Response) => {
  try {
    const result = await PessoaProvider.create(req.body);
    return res.status(StatusCodes.CREATED).send({ id: result });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ msg: error });
  }
};