const request = require('supertest');
const app = require('../app');

describe('GET /api/fibonacci/:count', () => {
  it('should return 400 for invalid count (zero or less)', async () => {
    const res = await request(app).get('/api/fibonacci/0');
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error');
  });

  it('should return a full Fibonacci sequence as an array', async () => {
    const count = 7;
    const expectedSequence = [0, 1, 1, 2, 3, 5, 8];
    const res = await request(app).get(`/api/fibonacci/${count}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.operation).toBe('fibonacci');
    expect(res.body.result).toEqual(expectedSequence);
  });
});
