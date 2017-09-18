var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/mean');

var usersSchema = new Schema({
    name: String,
    email: String,
    password: String
});

var studentSchema= new Schema({
	name:String,
	age:Number,
	location:String
});

var teacherSchema= new Schema({
	name:String,
	age:Number,
	location:String
});

var studentColl = mongoose.model("students",studentSchema);
var teacherColl = mongoose.model("teachers",teacherSchema);


var UsersCollection = mongoose.model('users', usersSchema);

module.exports = {
    UsersColl: UsersCollection,
    students: studentColl,
	teachers: teacherColl
};