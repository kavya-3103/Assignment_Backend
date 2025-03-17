const request = require('supertest');
const app = require('../app');

describe('GET /api/prime/:number', () => {
  it('should return 400 for invalid input (number less than 2)', async () => {
    const res = await request(app).get('/api/prime/1');
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error');
  });

  it('should correctly identify a prime number', async () => {
    const res = await request(app).get('/api/prime/11');
    expect(res.statusCode).toEqual(200);
    expect(res.body.operation).toBe('prime check');
    expect(res.body.result).toBe(1); // 11 is prime
  });

  it('should correctly identify a non-prime number', async () => {
    const res = await request(app).get('/api/prime/10');
    expect(res.statusCode).toEqual(200);
    expect(res.body.operation).toBe('prime check');
    expect(res.body.result).toBe(0); // 10 is not prime
  });
});
