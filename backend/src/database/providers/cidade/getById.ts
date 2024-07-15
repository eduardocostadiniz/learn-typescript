
import { ETableNames } from '../../../database/ETableName';
import { Knex } from '../../../database/knex';
import { ICidade } from 'src/database/models';


export const getById = async (id: number): Promise<ICidade | Error> => {
  try {
    const result = await Knex(ETableNames.CIDADE).select().where('id', id).first<ICidade>();
    return result ? result : new Error('Erro ao obter a cidade');

  } catch (error) {
    console.log(error);
    return new Error('Erro ao obter a cidade');
  }
};