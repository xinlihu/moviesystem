var mongoose = require('mongoose');
var url = 'mongodb://192.168.241.128/movieServer'
mongoose.connect(url);

module.exports = mongoose;