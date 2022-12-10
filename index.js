const path = require('path');
// 1. Let first start off by bringing in an express server
const express = require('express');
// 2. We have to call the config method
const dotenv = require('dotenv').config(); 
const port = process.env.PORT || 5000;

// 3. Let's now initialize express
const app = express();

// 4. Enable the body parser "middleWare"
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// Setup the static folder with express that points to the directory we have created called public
app.use(express.static(path.join(__dirname, 'public')));

// Add the routes file the app will crash because we need to add the express server to the routes file
app.use('/openai', require('./routes/openaiRoutes'));

app.listen(port, () => console.log(`Server started on port ${port}`));
