var mongoose = require('mongoose');


var DocSchema = new mongoose.Schema({
    docname: {type: String},
    did: {type: Number},
    dname: {type: Number},
    email1: {type: String},
    phone_number1: {type: Number},
    department: {type: String},
    created_at: {type: Date, default: Date.now},
    updated_at: Date
});

module.exports = mongoose.model('doctor', DocSchema);
