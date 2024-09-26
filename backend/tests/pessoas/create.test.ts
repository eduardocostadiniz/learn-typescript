import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('Pessoas - Create', () => {

  it('Cria uma pessoa', async () => {
    const response = await testServer.post('/pessoas').send({ nomeCompleto: 'Nome Teste', email: 'teste@teste.com', cidadeId: 1 });
    expect(response.statusCode).toEqual(StatusCodes.CREATED);
    expect(response.body).toHaveProperty('id');
    expect(response.body['id']).toEqual(5);
  });

});