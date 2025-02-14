import { ICidade, IPessoa } from 'src/database/models';

declare module 'knex/types/tables' {
  interface Tables {
    cidade: ICidade
    pessoa: IPessoa
  }
}