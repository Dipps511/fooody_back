const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('responds with JSON containing a welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ mesg: 'Food Ordering - B' });
  });

  // Add the afterAll hook to close the server
  afterAll((done) => {
    // Assuming you have access to the server instance in your app.js file
    app.close(() => {
      done();
    });
  });
});
