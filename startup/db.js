const mongoose = require('mongoose');
const winston = require('winston');

module.exports = () => {
    mongoose.connect('mongodb://localhost/customerDatabase', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }).then(() => winston.info('Database connected successfuly...'));
}