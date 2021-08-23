// dependencies acquired to access routes
const express = require('express');
const api = require('./routes/api');
const html = require('./routes/html');

//initializes express app and creates port for heroku
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Setup listener
app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));
