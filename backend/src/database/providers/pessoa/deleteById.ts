import { ETableNames } from '../../../database/ETableName';
import { Knex } from '../../../database/knex';


export const deleteById = async (id: number): Promise<void | Error> => {
  try {
    await Knex(ETableNames.PESSOA).where('id', id).delete();

  } catch (error) {
    console.log(error);
    return new Error('Erro ao deletar a pessoa!');
  }
};