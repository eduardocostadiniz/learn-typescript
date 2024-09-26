import { ETableNames } from '../ETableName';
import { Knex } from '../knex';


export const seed = async () => {
  const count = await Knex(ETableNames.PESSOA).count('* as total').select().first<{ total: number }>();

  if (!Number.isInteger(count.total) || count.total > 0) return;

  const { cidadeId } = await Knex(ETableNames.CIDADE).min('id as cidadeId').first<{ cidadeId: number }>();

  const pessoas = inserirPessoas.map(pessoa => ({ ...pessoa, cidadeId }));

  await Knex(ETableNames.PESSOA).insert(pessoas);
};

const inserirPessoas = [
  { nomeCompleto: 'Eduardo Diniz', email: 'eduardo@teste.com' },
  { nomeCompleto: 'Jetro Barbosa', email: 'jetro@teste.com' },
  { nomeCompleto: 'Lucas Rodrigues', email: 'lucas@teste.com' },
  { nomeCompleto: 'Gaby Bernardes', email: 'gaby@teste.com' },
];