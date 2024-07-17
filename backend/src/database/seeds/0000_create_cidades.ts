import { ETableNames } from '../ETableName';
import { Knex } from '../knex';


export const seed = async () => {
  const count = await Knex(ETableNames.CIDADE).count('* as total').select().first<{ total: number }>();

  if (!Number.isInteger(count.total) || count.total > 0) return;

  const cidades = cidadesMG.map(nomeCidade => ({ nome: nomeCidade }));

  await Knex(ETableNames.CIDADE).insert(cidades);

};

const cidadesMG = [
  'Araguari',
  'Ponte Nova',
  'Três Corações',
  'Três Marias',
  'Três Pontas',
  'Tupaciguara',
  'Ubaí',
  'Uberaba',
  'Uberlândia',
  'Umburatiba',
];
