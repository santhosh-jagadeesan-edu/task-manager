const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const tasks = require('./routes/tasks');

app.get('/', (req, res) => res.send('Welcome to Task Manager'));

// Middleware
app.use(express.json());

// Routes
app.use('/api/v1/tasks', tasks);

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
