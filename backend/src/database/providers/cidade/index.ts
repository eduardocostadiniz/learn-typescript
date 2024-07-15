import * as getById from './getById';
import * as updateById from './updateById';
import * as deleteById from './deleteById';
import * as create from './create';
import * as getAll from './getAll';

export const CidadesProvider = {
  ...create,
  ...getAll,
  ...getById,
  ...updateById,
  ...deleteById,
};