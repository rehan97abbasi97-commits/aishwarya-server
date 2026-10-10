const { default: mongoose, model } = require("mongoose");

const StudentSchema=new mongoose.Schema(
    {
        name: {
            type : String,
            required : true
        },
        fatherName: {
            type : String,
            required : true
        },
        email: {
            type : String
        },
        phone: {
            type : Number,
            required : true
        },
        dob: {
            type : String,
            required : true
        },
    }
)

const StudentModel=model("Student",StudentSchema)

module.exports=StudentModel