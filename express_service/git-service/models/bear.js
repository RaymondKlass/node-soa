var mongoose = require('mongoose');
var schema = mongoose.schema;

var BearSchema = new Schema({
    name: String  
});

module.exports = mongoose.model('Bear', BearSchema);