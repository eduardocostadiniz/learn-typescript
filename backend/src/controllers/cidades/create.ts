import { Request, Response } from 'express';
import * as yup from 'yup';
import { StatusCodes } from 'http-status-codes';

interface ICidade {
  name: string;
  estado: string;
}

const cidadeValidation: yup.Schema<ICidade> = yup.object().shape({
  name: yup.string().required().min(3),
  estado: yup.string().required().min(3),
});

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  let validacaoCorpo : ICidade | undefined = undefined;

  try {
    validacaoCorpo = await cidadeValidation.validate(req.body, {abortEarly: false});
  } catch (error) {
    const erros = error as yup.ValidationError;
    const mapErrors: Record<string, string> = {};

    erros.inner.forEach(err => {
      if (!err.path) return;
      mapErrors[err.path] = err.message;
    });

    return res.status(StatusCodes.BAD_REQUEST).send({errors: mapErrors});
  }
  
  console.log(validacaoCorpo);

  return res.status(StatusCodes.CREATED).send({ data: req.body });
};
