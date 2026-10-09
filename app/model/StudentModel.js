const { default: mongoose, model } = require("mongoose");

const StudentSchema=new mongoose.Schema(
    {
        name: {
            type : String,
            require : true
        },
        fatherName: {
            type : String,
            require : true
        },
        email: {
            type : String
        },
        phone: {
            type : Number,
            require : true
        },
        dob: {
            type : String,
            require : true
        },
    }
)

const StudentModel=model("Student",StudentSchema)

module.exports=StudentModel