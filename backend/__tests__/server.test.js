const request = require('supertest');
const app = require('../server.js');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

describe('API Endpoints', () => {
    beforeAll(async () => {
        mongoServer = await MongoMemoryServer.create();
        const mongoUri = mongoServer.getUri();
        process.env.MONGODB_URI = mongoUri;
    });

    afterAll(done => { 
        if (mongoServer) {
            mongoServer.stop();
        }
        done();
    });

    test('POST /api/submit - success', async () => {
        const sampleData = { name: 'John Doe', email: 'john@example.com', message: 'Hello world!'};
        const response = await request(app)
            .post('/api/submit')
            .send(sampleData);

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('id');
    });

    test('CORS policy allows requests from allowed origin', async () => {
        const response = await request(app)
            .post('/api/submit')
            .set('Origin', 'http://localhost:3000') // Allowed origin
            .send({ name: 'John Doe', email: 'griffinclark10@gmail.com', message: 'testing CORS policy 1' });
    
        expect(response.headers['access-control-allow-origin']).toEqual('http://localhost:3000');
        expect(response.statusCode).not.toBe(401);
    });

    test('Invalid route should return 404', async () => {
        const response = await request(app)
            .post('/non-existent-route')
            .send();
        
        expect(response.statusCode).toBe(404);
    });
});
