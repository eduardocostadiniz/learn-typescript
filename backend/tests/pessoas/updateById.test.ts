import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Pessoas - Update By ID', () => {
  it('Atualiza uma pessoa pelo ID', async () => {
    const response = await testServer.put('/pessoas/1').send({ nomeCompleto: 'Nome Teste', email: 'teste@teste.com', cidadeId: 1 });
    expect(response.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });
});