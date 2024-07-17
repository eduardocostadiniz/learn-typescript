import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cidades - Delete By ID', () => {
  it('Deleta uma cidade pelo ID', async () => {
    const response = await testServer.delete('/cidades/1').send();
    expect(response.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });
});