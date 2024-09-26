import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('Cidades - Get All', () => {
  it('Obtém todas as cidades', async () => {
    const response = await testServer.get('/cidades').send();
    expect(response.statusCode).toEqual(StatusCodes.OK);
    expect(response.body).toHaveProperty('data');
    expect(Array.isArray(response.body['data'])).toEqual(true);
    expect(response.body['data'].length).toEqual(10);
  });
});