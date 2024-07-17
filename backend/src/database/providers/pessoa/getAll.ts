import { ETableNames } from '../../../database/ETableName';
import { Knex } from '../../../database/knex';
import { IPessoa } from 'src/database/models';

export const getAll = async (): Promise<IPessoa[] | Error> => {
  try {
    const result = await Knex(ETableNames.PESSOA).select<IPessoa[]>();
    return result;

  } catch (error) {
    console.log(error);
    return new Error('Erro ao buscar os registros');
  }
};