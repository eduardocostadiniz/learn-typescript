
import { ETableNames } from '../../../database/ETableName';
import { Knex } from '../../../database/knex';


export const deleteById = async (id: number): Promise<undefined | Error> => {
  try {
    await Knex(ETableNames.CIDADE).delete().where('id', id);
  } catch (error) {
    console.log(error);
    return new Error('Erro ao deletar as cidades');
  }
};