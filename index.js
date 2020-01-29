const express = require('express');
// const connectDB = require('../');

const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => res.send('Working'))
app.listen(PORT, () => console.log(`Server started on port ${5000}`));