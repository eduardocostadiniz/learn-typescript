
import { ETableNames } from '../../../database/ETableName';
import { Knex } from '../../../database/knex';


export const updateById = async (id: number, nome: string): Promise<undefined | Error> => {
  try {
    await Knex(ETableNames.CIDADE).update({ nome }).where('id', id);
  } catch (error) {
    console.log(error);
    return new Error('Erro ao atualizar a cidade');
  }
};