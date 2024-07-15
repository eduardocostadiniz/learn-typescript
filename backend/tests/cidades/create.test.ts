import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('Cidades - Create', () => {

  it('Cria uma cidade', async () => {
    const response = await testServer.post('/cidades').send({ nome: 'Araguari'});
    expect(response.statusCode).toEqual(StatusCodes.CREATED);
    expect(response.body).toHaveProperty('id');
    expect(response.body['id']).toEqual(1);
  });

  it('Erro ao criar cidade sem nome', async () => {
    const response = await testServer.post('/cidades').send({ });

    expect(response.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(response.body).toHaveProperty('errors');
    expect(response.body['errors']).toHaveProperty('nome');
    expect(response.body['errors']['nome']).toEqual('Este campo é obrigatório');
  });

});