const { request } = require("express");
const StudentModel = require("../model/StudentModel");

const StudentController = {
    
    async create(reqest, response) {
        const body=reqest.body
        await StudentModel.create(body)
        response.send({
            message: "Success! New record created.",
            reqBody: body
        })
    },
    async readAll(request, response) {
        const students=await StudentModel.find() 
        
        response.send({
            message: "Success! 46record found.",
            data: students
        })
    },
    async readOne(request, response) {
        const params = request.params;
        const studentsDetails= await StudentModel.findById(params.id)
        response.send({
            message: "Success! Student details found.",
            data: studentsDetails
        })
        // params:params
    },
    async update(request, response) {
        const params = request.params
        const body = request.body

        await StudentModel.findByIdAndUpdate(params.id,body)
        response.send({
            message: "Success! Record has been updated."
        })
    },

    async destroy(request, response) {
        const params=request.params
        await StudentModel.findByIdAndDelete(params.id)
        response.send({
            message: "Success! Record has been deleted."
        })
    },
}






module.exports = StudentController