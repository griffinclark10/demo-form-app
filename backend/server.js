const express = require('express');
const app = express();
const port = 5000; // Use a different port from Next.js

app.get('/', (req, res) => res.send('Hello from Backend!'));

app.listen(port, () => console.log(`Backend listening on http://localhost:${port}`));
