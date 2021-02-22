require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const authRoute = require('./routes/auth.js');

app.use('/auth', authRoute);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});