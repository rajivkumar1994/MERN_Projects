require('./config/config');
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

const mongoose = require('./db/mongoose');
const SignUpRoute = require('./routes/SignUpRoute');

mongoose.Promise = global.Promise;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());
app.use(morgan('dev'));

app.use('/', SignUpRoute);

const port = process.env.PORT || 4000;

const server = app.listen(port, function () {
    console.log('Server Lisening On Port : ' + port);
});

module.exports = { app };