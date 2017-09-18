var async=require("async");

var StudentCollection = require('../models/schemas.js').students;
var teacherCollection = require('../models/schemas.js').teachers;

function getParallel(callback){
    var retObj={};
        async.parallel({
            student: function(callback1){
                    StudentCollection.find({},function(err,docs){
                    callback1(null,docs);
                    });
                
                },
            
            teacher: function(callback2){
                teacherCollection.find({},function(err,docs){
                    callback2(null,docs);
                });
            }
        },
            function(err, results) {
                if(err){
                    retObj.status=false;
                    retObj.message="error";
                    callback(retObj);
                }
                else{
                    retObj.status=true;
                    retObj.output=results.student.concat(results.teacher);
                    retObj.message="success";
                    callback(retObj);
                }
               
            });
}


module.exports=getParallel;