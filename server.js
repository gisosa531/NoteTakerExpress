// dependencies acquired to access routes
const express = require('express');

//access js files
const api = require('./routes/api');
const html = require('./routes/html');

//initializes express app and creates port for heroku
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// access public folder 
app.use(express.static('public'));

app.use('/', html);
app.use('/api', api);

// Start setup listener on port
app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));
