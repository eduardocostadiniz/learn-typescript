import { ETableNames } from '../../../database/ETableName';
import { Knex } from '../../../database/knex';
import { IPessoa } from 'src/database/models';


export const updateById = async (id: number, pessoa: Omit<IPessoa, 'id'>): Promise<void | Error> => {
  try {
    await Knex(ETableNames.PESSOA).update(pessoa).where('id', id);

  } catch (error) {
    console.log(error);
    return new Error('Erro ao atualizar a pessoa!');
  }
};