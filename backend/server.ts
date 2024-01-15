import express, { Request, Response } from 'express';
import { Db, MongoClient } from 'mongodb';
import dotenv from 'dotenv'; 

dotenv.config(); 

const mongoUser = process.env.MONGODB_USER;
const mongoPswd = process.env.MONGODB_PASSWORD;

//Setup mongodb connection
const uri = `mongodb+srv://${mongoUser}:${mongoPswd}@demo-form-db.ai7xqkx.mongodb.net/?retryWrites=true&w=majority`;
let db: Db;

async function connectToMongoDB() {
    try {
        const client = new MongoClient(uri);
        await client.connect();
        db = client.db('demo-form-db');
        console.log('Connected to MongoDB!');
    } catch (err) {
        console.error("MongoDB connection failed", err);
    }
}

connectToMongoDB();

// Configure Express API
const app = express();
app.use(express.json());

// Async post request handler to save form data to MongoDB
app.post('/api/submit', async (req: Request, res: Response) => {
    try {
        const formData = req.body;
        const formSubmissionCollection = db.collection('form-submissions');
        const result = await formSubmissionCollection.insertOne(formData);
        res.status(200).json({ message: 'Form data saved -- submission: ', id: result.insertedId });
    } catch (err) {
        console.error("Error saving form data", err);
        res.status(500).json({ message: 'Error saving form data', error: err });
    }
});