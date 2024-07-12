import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('Cidades - Create', () => {

  it('Cria uma cidade', async () => {
    const response = await testServer.post('/cidades').send({nome: 'Araguari', estado: 'Minas Gerais'});

    expect(response.statusCode).toEqual(StatusCodes.CREATED);
    expect(response.body).toHaveProperty('id');

  });
});