const request = require('supertest');
const app = require('../app');

describe('GET /api/factorial/:number', () => {
  it('should return 400 for invalid input (negative number)', async () => {
    const res = await request(app).get('/api/factorial/-5');
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error');
  });

  it('should calculate factorial correctly', async () => {
    const res = await request(app).get('/api/factorial/5');
    // 5! = 120
    expect(res.statusCode).toEqual(200);
    expect(res.body.operation).toBe('factorial');
    expect(res.body.result).toBe(120);
  });
});
