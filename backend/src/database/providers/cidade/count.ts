
import { ETableNames } from '../../../database/ETableName';
import { Knex } from '../../../database/knex';


export const count = async (): Promise<number | Error> => {
  try {
    const result = await Knex(ETableNames.CIDADE).count('id as total').select().first<{total: number}>();

    if (result && result.total >= 0) return result.total;

    return new Error('Erro ao listar as cidades');
  } catch (error) {
    console.log(error);
    return new Error('Erro ao listar as cidades');
  }
};