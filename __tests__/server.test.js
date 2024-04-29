const request = require('supertest');
const app = require('../server');

describe('GET /data', () => {
  it('responds with json', async () => {
    const res = await request(app)
      .get('/data')
      .expect('Content-Type', /json/)
      .expect(200);

      expect(res.body).toEqual(expect.objectContaining({
        data: expect.any(Array)
      }));
  });
});
