const express = require("express");

const app = express();

const port = 7000

app.get('/', function(req, res){
   
     res.send(`<h1> Ex.2 : Create a server using express </h1>
     <p> Ques.1 Send JSON response, a student details like name, age, email, contact, course, date of joining.</p>
     <b> Ans : { Name: Abhay, Age: 24, Email: abhaygangwar0807@gmail.com, Contact: 8859888436, Course: Full Stack Web Developer,  Date of Joining : December 2021} </b>`);
    

    res.end()
})

app.listen(port) 