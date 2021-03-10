const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes')

mongoose.connect('mongodb://localhost/ex1api')
    .then((db) => console.log('DB connected'))
    .catch((err) => console.log('An error occurred during DB connection: ' + err))

const app = express()
app.set('port', 3000);
app.use(express.json());

app.use('/', routes.users);

app.listen(app.get('port'), () => {
    console.log('Serve on port : ', app.get('port'));
});