const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const PORT = 3000


dotenv.config();
//Middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//ROUTES
app.use(require('./routes/index'))



app.listen(PORT) 
console.log('Server on port 3000') 