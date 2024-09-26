import { ETableNames } from '../../../database/ETableName';
import { Knex } from '../../../database/knex';
import { IPessoa } from 'src/database/models';


export const getById = async (id: number): Promise<IPessoa | Error> => {
  try {
    const result = await Knex(ETableNames.PESSOA).select().where('id', id).first<IPessoa>();
    return result;

  } catch (error) {
    console.log(error);
    return new Error('Erro ao obter a pessoa!');
  }
};