import { Request, RequestHandler, Response } from 'express';
import * as yup from 'yup';
import { StatusCodes } from 'http-status-codes';

interface ICidade {
  nome: string;
  estado: string;
}

const cidadeValidation: yup.Schema<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3),
  estado: yup.string().required().min(3),
});


export const createBodyValidator : RequestHandler = async (req, res, next) => {
  try {
    await cidadeValidation.validate(req.body, {abortEarly: false});
    return next();
  } catch (error) {
    const erros = error as yup.ValidationError;
    const mapErrors: Record<string, string> = {};

    erros.inner.forEach(err => {
      if (!err.path) return;
      mapErrors[err.path] = err.message;
    });

    return res.status(StatusCodes.BAD_REQUEST).send({errors: mapErrors});
  }
};

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {  
  console.log(req.body);

  return res.status(StatusCodes.CREATED).send({ data: req.body });
};
