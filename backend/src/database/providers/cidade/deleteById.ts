
import { ETableNames } from '../../../database/ETableName';
import { Knex } from '../../../database/knex';


export const deleteById = async (id: number): Promise<void | Error> => {
  try {
    const result = await Knex(ETableNames.CIDADE).where('id', id).delete();

    if (result > 0) return;

    return new Error('Erro ao deletar as cidades');
  } catch (error) {
    console.log(error);
    return new Error('Erro ao deletar as cidades');
  }
};