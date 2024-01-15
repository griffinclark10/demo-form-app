const express = require('express');
const mongodb = require('mongodb');
const dotenv = require('dotenv'); 
const cors = require('cors');

dotenv.config(); 

// ------------------ MongoDB ------------------ //

const mongoUser = process.env.MONGODB_USER;
const mongoPswd = process.env.MONGODB_PASSWORD;

//Setup mongodb connection
const uri = `mongodb+srv://${mongoUser}:${mongoPswd}@demo-form-db.ai7xqkx.mongodb.net/?retryWrites=true&w=majority`;
let db;

async function connectToMongoDB() {
    try {
        const client = new mongodb.MongoClient(uri);
        await client.connect();
        db = client.db('demo-form-db');
        console.log('Connected to MongoDB!');
    } catch (err) {
        console.error("MongoDB connection failed", err);
    }
}

connectToMongoDB();

// ------------------ Express API ------------------ //

// Configure Express API
const app = express();

// confirgure CORS to make sure frontend can access the API
app.use(cors({
    origin: 'http://localhost:3000'
}));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
app.use(express.json());

// Async post request handler to save form data to MongoDB
app.post('/api/submit', async (req, res) => {
    console.log("Received form submission:", req.body);
    try {
        const formData = req.body;
        const formSubmissionCollection = db.collection('form-submissions');
        const result = await formSubmissionCollection.insertOne(formData);
        res.status(200).json({ message: 'Form data saved ', id: result.insertedId });
    } catch (err) {
        console.error("Error saving form data", err);
        res.status(500).json({ message: 'Error saving form data', error: err });
    }
});