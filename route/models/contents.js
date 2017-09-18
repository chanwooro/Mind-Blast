var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var contentsSchema = new Schema({
    id: Number,
    content: String
});

mongoose.model('Contents', contentsSchema);