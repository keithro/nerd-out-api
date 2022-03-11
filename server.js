require('dotenv').config();
const express = require('express');
const cors = require('cors');

const attendeesController = require('./controllers/attendeesController');

// NEW EXPRESS INSTANCE
const app = express();


// MIDDLEWARE
app.use(cors());
// Parses incoming URL-encoded data:
app.use(express.urlencoded({ extended: false }));
// Parses incoming JSON-encoded data from req.body:
app.use(express.json());


// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to the Nerd Out API!');
});

app.use('/api', attendeesController);


// START SERVER
app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")}`);
});
