const mongoose = require('mongoose');
const Joi = require('joi');

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    idcust: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    }

});

const Customer = mongoose.model('Customer', customerSchema);

const validateCustomer = (customer) => {
    const schema = {
        name: Joi.string().required(),
        idcust: Joi.string().required(),
        number: Joi.string().required()
    }

    return Joi.validate(customer, schema);
}


module.exports.Customer = Customer;
module.exports.validate = validateCustomer;