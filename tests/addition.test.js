const request = require('supertest');
const app = require('../app');

describe('POST /api/addition', () => {
  it('should return 400 if numbers are not valid', async () => {
    const res = await request(app)
      .post('/api/addition')
      .send({ num1: "a", num2: "b" });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error');
  });

  it('should add two numbers and return the result', async () => {
    const res = await request(app)
      .post('/api/addition')
      .send({ num1: 5, num2: 3 });
    expect(res.statusCode).toEqual(200);
    expect(res.body.operation).toBe('addition');
    expect(res.body.result).toBe(8);
  });
});
