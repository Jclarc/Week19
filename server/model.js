/**
 * Created by Jake on 11/7/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Schema = new Schema({
    title: {type:String,},
    date: {type:Date},
    url:{type: String,}
});

var Article = mongoose.model('Article', Schema);
module.exports = Article;