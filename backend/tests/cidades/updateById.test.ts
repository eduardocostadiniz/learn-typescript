import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cidades - Update By ID', () => {
  it('Atualiza uma cidade pelo ID', async () => {
    const response = await testServer.put('/cidades/1').send({nome: 'Anything'});
    expect(response.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });
});