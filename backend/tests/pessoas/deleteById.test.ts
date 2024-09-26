import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Pessoas - Delete By ID', () => {
  it('Deleta uma pessoa pelo ID', async () => {
    const response = await testServer.delete('/pessoas/1').send();
    expect(response.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });
});