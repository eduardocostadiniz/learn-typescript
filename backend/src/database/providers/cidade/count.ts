
import { ETableNames } from '../../../database/ETableName';
import { Knex } from '../../../database/knex';
import { ICidade } from 'src/database/models';


export const count = async (): Promise<number | Error> => {
  try {
    const result = await Knex(ETableNames.CIDADE).count().select<number>();

    return result;
  } catch (error) {
    console.log(error);
    return new Error('Erro ao listar as cidades');
  }
};