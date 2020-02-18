const express = require('express');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;
const app = express();
connectDB();

app.get('/', (req, res) => res.send('Working'));
app.use('/api/users', require('./routes/api/users'));
app.listen(PORT, () => console.log(`Server started on port ${5000}`));