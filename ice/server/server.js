
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');

// Route includes
const customerRouter = require('./routes/customer.router');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// cors set up
app.use(cors())

/* Routes */
app.use('/api/customer', customerRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
