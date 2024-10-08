import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cidades - Get By ID', () => {
  it('Obtém uma cidade pelo ID', async () => {
    const response = await testServer.get('/cidades/1').send();
    expect(response.statusCode).toEqual(StatusCodes.OK);
    expect(response.body).toHaveProperty('data');
    expect(response.body['data']).toHaveProperty('nome');
    expect(response.body['data']['nome']).toEqual('Araguari');
  });
});