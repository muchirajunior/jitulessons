const express = require('express')  //import express
var bodyParser = require('body-parser') // used for json decoding, not required

const app=express()   //instantiate our app

//allow our app to decode json strings sent using request
app.use(express.json())

const PORT=8000 //port

var todos=[] // an empty array that will store our data in the RAM

//index route
app.get('/', (req,res)=>  res.send("hello john ") )



//add a new todo
app.post('/addtodo', (req,res) =>{
    console.log(req.body)
    todo=req.body;
     todos.push({todo})
    res.send({"post ":"success"})
} )

//get all todos route
app.get('/alltodos', (req,res)=> res.send(todos) )

//get a specific todo
app.get('/gettodo/:id', (req,res)=>{
   var index=parseInt(req.params.id)
   var todo= todos.find((todo)=>todo.id===index)
   res.send(todo) 
} )

//update a todo
app.put('/updatetodo/:id', (req,res)=>{
    var index=parseInt(req.params.id)
    var newTodo=req.body
    todos = todos.map((todo)=>todo.id===index ? todo=newTodo : todo )
    var todo=todos.find((todo)=> todo.id === index)
   
    res.send(todo)
} )

//delete a todo
app.delete('/deletetodo/:id', (req,res)=> {
    var index=parseInt(req.params.id)
    var todo=todos.find((todo)=>todo.id===index)
    todos= todos.pop(todo)

    res.send("deleted")
} )

app.listen(PORT, ()=> console.log(`app listening to port ${PORT}`) )