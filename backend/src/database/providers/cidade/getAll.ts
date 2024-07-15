
import { ETableNames } from '../../../database/ETableName';
import { Knex } from '../../../database/knex';
import { ICidade } from 'src/database/models';


export const getAll = async (): Promise<ICidade[] | Error> => {
  try {
    const result = await Knex(ETableNames.CIDADE).select<ICidade[]>();

    return result;
  } catch (error) {
    console.log(error);
    return new Error('Erro ao listar as cidades');
  }
};