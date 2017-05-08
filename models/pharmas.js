var mongoose = require('mongoose');

var PharmaSchema = new mongoose.Schema({
    pharmaname: {type: String},
    pid: {type: Number},
    pname: {type: String},
    email2: {type: String},
    phone_number2: {type: Number},
    created_at: {type: Date, default: Date.now},
    updated_at: Date
});

module.exports = mongoose.model('pharma', PharmaSchema);
