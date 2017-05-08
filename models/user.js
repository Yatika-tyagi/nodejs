// Load required packages
var mongoose = require('mongoose');

// Define our user schema
var UserSchema = new mongoose.Schema({
    username: {type: String},
    uid: {type:Number},
    name: {type: String},
    email: {type: String},
    phone_number: {type: Number},
    created_at: {type: Date, default: Date.now},
    updated_at: Date
});

/*var DocSchema = new mongoose.Schema({
    docname: {type: String},
    did: {type: Number},
    dname: {type: String},
    email1: {type: String},
    phone_number1: {type: Number},
    department: {type: String},
    //created_at: {type: Date, default: Date.now},
    //updated_at: Date
});

var PharmaSchema = new mongoose.Schema({
    pharmaname: {type: String},
    pid: {type: Number},
    pname: {type: String},
    email2: {type: String},
    phone_number2: {type: Number},
    created_at: {type: Date, default: Date.now},
    updated_at: Date
});
*/
// Export the Mongoose model
module.exports = mongoose.model('user', UserSchema);
