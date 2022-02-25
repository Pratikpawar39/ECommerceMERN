const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');

//call express app and set it use in appplication
const app = express();
app.use(express.json());

//used in production to serve client files
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'));
    });
}

//connecting mongoDb and then running server on port 3000
//geting dbURI from config
const dbURI = config.get('dbURI');  
const port = process.env.PORT || 3000;
mongoose.connect(dbURI, {useNewUrlParser: true, useUndifiedTopology: true, useCreateIndex: true})
    .then((result) => app.listen(port))
    .catch((err) => console.log(err));