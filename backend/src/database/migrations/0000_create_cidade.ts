import { Knex } from 'knex';
import { ETableNames } from '../ETableName';


export async function up(knex: Knex) {
  return knex.schema.createTable(ETableNames.CIDADE, table => {
    table.bigIncrements('id').primary().index();
    table.string('nome', 150).checkLength('<=', 150).index().notNullable();
    table.comment('Tabela usada para armazenar cidades');
  }).then(() => console.log(`# Created table ${ETableNames.CIDADE}`));
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.CIDADE).then(
    () => console.log(`# Dropped table ${ETableNames.CIDADE}`));
}