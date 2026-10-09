const express = require("express");
const mongoose=require("mongoose");
const StudentController = require("./app/controller/StudentController");
mongoose.connect("mongodb://localhost:27017/StudentDB");
const PORT = 8000;

const app = express();
app.use(express.json());

app.get("/",(reqest,response)=>{
    response.send("Welcome.")
})

app.get("/about",(reqest,response)=>{
    response.send("Something about us.")
})

app.post("/student",StudentController.create);
app.get("/student",StudentController.readAll);
app.get("/student/:id",StudentController.readOne);
app.put("/student/:id",StudentController.update);
app.delete("/student/:id",StudentController.destroy);


app.listen(PORT,()=>{
    console.log(`Server is working is fine at http://localhost:${PORT}`);
    
})