const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
               throw new Error("Invalid email");
            }
        }
    },
    phone:{
        type:Number,
        required:false,
        minlength:10,
    },
    address:{
        type:String,
        required:true,
    }

});

const Student = mongoose.model("Student",studentSchema);

module.exports = Student;