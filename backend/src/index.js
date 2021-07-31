const express = require('express');
const routes = require ('./routes');
// Import the library:
var cors = require('cors');
const corsOptions = {
    exposedHeaders: 'Authorization',
  };
  

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);

app.listen(3333);
console.log("The app is online!")
