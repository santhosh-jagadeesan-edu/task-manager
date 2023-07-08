const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const connectDB = require('./db/connect');

const tasks = require('./routes/tasks');

// Middleware
app.use(express.json());

app.get('/hello', (req, res) => res.json({ msg: 'Hello!!!' }));

const startApplication = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

// Routes
app.use('/api/v1/tasks', tasks);

startApplication();
