
import { ETableNames } from '../../../database/ETableName';
import { Knex } from '../../../database/knex';
import { IPessoa } from 'src/database/models';

export const create = async (pessoa: Omit<IPessoa, 'id'>): Promise<number | Error> => {
  try {
    const [result] = await Knex(ETableNames.PESSOA).insert(pessoa).returning('id');

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