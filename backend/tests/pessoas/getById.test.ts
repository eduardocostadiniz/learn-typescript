import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Pessoas - Get By ID', () => {
  it('Obtém uma pessoa pelo ID', async () => {
    const response = await testServer.get('/pessoas/1').send();
    expect(response.statusCode).toEqual(StatusCodes.OK);
    expect(response.body).toHaveProperty('data');
    expect(response.body['data']).toHaveProperty('nomeCompleto');
    expect(response.body['data']).toHaveProperty('email');
    expect(response.body['data']['nomeCompleto']).toEqual('Eduardo Diniz');
    expect(response.body['data']['email']).toEqual('eduardo@teste.com');
  });
});