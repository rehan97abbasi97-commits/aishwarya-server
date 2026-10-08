const StudentController = {
    create(reqest, response) {
        response.send({
            message: "Success! New record created.",
            // reqBody: body
        })
    },
    readAll(request, response) {
        response.send({
            message: "Success! 46record found."
        })
    },
    readOne(request, response) {
        const params = request.parems;
        response.send({
            message: "Success! Student details found."
        })
        // params:params
    },
    update(request, response) {
        response.send({
            message: "Success! Record has been updated."
        })
    },
    destroy(request, response) {
        response.send({
            message: "Success! Record has been deleted."
        })
    },
}






module.exports = StudentController