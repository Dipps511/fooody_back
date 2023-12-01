const request = require('supertest');
const app = require('./app'); // Assuming your app is in a file named 'app.js'

describe('GET /', () => {
  it('responds with JSON containing a welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ mesg: 'Food Ordering - B' });
  });
});
