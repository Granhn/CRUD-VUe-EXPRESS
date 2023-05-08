const express = require('express');
const app = express();
const port = 3000

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//ROUTES
app.use(require('./routes/index'))



app.listen(port)
console.log('Server on port 3000')