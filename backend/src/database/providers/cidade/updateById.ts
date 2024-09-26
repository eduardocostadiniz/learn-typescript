
import { ICidade } from 'src/database/models';
import { ETableNames } from '../../../database/ETableName';
import { Knex } from '../../../database/knex';


export const updateById = async (id: number, cidade: Omit<ICidade, 'id'>): Promise<undefined | Error> => {
  try {
    const result = await Knex(ETableNames.CIDADE).update(cidade).where('id', id);
    if (result > 0) return;
    return new Error('Erro ao atualizar a cidade');
  } catch (error) {
    console.log(error);
    return new Error('Erro ao atualizar a cidade');
  }
};