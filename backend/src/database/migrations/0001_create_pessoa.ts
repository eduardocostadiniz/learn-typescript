import { Knex } from 'knex';
import { ETableNames } from '../ETableName';


export async function up(knex: Knex) {
  return knex.schema.createTable(ETableNames.PESSOA, table => {
    table.bigIncrements('id').primary().index();
    table.string('nomeCompleto').index().notNullable();
    table.string('email').unique().notNullable();
    table.bigInteger('cidadeId').index().notNullable().references('id').inTable(ETableNames.CIDADE).onUpdate('CASCADE').onDelete('RESTRICT');
    table.comment('Tabela usada para armazenar pessoas');
  }).then(() => console.log(`# Created table ${ETableNames.PESSOA}`));
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(ETableNames.PESSOA).then(
    () => console.log(`# Dropped table ${ETableNames.PESSOA}`));
}