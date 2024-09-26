import { Request, RequestHandler, Response } from 'express';
import * as yup from 'yup';
import { StatusCodes } from 'http-status-codes';
import { ICidade } from 'src/database/models';
import { CidadesProvider } from '../../database/providers/cidade';

interface IBodyProps extends Omit<ICidade, 'id'> {}

const cidadeValidation: yup.Schema<IBodyProps> = yup.object().shape({
  nome: yup.string().required().min(3).max(150),
});


export const createBodyValidator: RequestHandler = async (req, res, next) => {
  try {
    await cidadeValidation.validate(req.body, { abortEarly: false });
    return next();
  } catch (error) {
    const erros = error as yup.ValidationError;
    const mapErrors: Record<string, string> = {};

    erros.inner.forEach(err => {
      if (!err.path) return;
      mapErrors[err.path] = err.message;
    });

    return res.status(StatusCodes.BAD_REQUEST).send({ errors: mapErrors });
  }
};

export const create = async (req: Request<{}, {}, IBodyProps>, res: Response) => {
  const result = await CidadesProvider.create(req.body);

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message,
      }
    });
  }

  return res.status(StatusCodes.CREATED).send({ id: result });
};
