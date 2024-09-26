
import { ETableNames } from '../../../database/ETableName';
import { Knex } from '../../../database/knex';
import { ICidade } from 'src/database/models';

export const create = async (cidade: Omit<ICidade, 'id'>): Promise<number | Error> => {
  try {
    const [result] = await Knex(ETableNames.CIDADE).insert(cidade).returning('id');

    if (typeof result === 'object') {
      return result.id;
    } else if (typeof result === 'number') {
      return result;
    }
    return new Error('Erro ao cadastrar o registro!');

  } catch (error) {
    console.log(error);
    throw error;
  }
};