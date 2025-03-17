const request = require('supertest');
const app = require('../app');

describe('POST /api/power', () => {
  it('should return 400 if base and exponent are not valid numbers', async () => {
    const res = await request(app)
      .post('/api/power')
      .send({ base: "a", exponent: "b" });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error');
  });

  it('should calculate the power correctly', async () => {
    const res = await request(app)
      .post('/api/power')
      .send({ base: 2, exponent: 3 });
    expect(res.statusCode).toEqual(200);
    expect(res.body.operation).toBe('power');
    expect(res.body.result).toBe(8);
  });
});
