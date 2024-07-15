import { ICidade } from 'src/database/models';

declare module 'knex/types/tables' {
  interface Tables {
    cidade: ICidade
  }
}