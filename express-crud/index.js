const express=require('express')

const app =express()

const PORT=8000

var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('mydb.db')

app.use(express.json())

app.get('/',(req,res)=>{
    res.send({status:"running"})
})

app.get('/createtables',(req,res)=>{
    try {
        db.exec(` CREATE TABLE users (
            id int ,
            name varchar(200),
            username varchar(100),
            password varchar(20),
            age int,
    
            PRIMARY KEY(id)
        );
        CREATE TABLE project(
            id int,
            name varchar(100),
            owner varchar(100),
    
            primary key (id)
        ); `,
        (error)=>res.status(400).json({message:error}) 
        )

        if (Error) {
           return res.status(400).json({message:"failed"})  
        }
    
        res.status(200).json({message:"tables created successfully"}) 

    } catch (error) {
        res.status(400).json({message:error}) 
    }
    
})


app.post('/adduser', (req,res)=>{
    var {name,username,password,age} =req.body
    console.log(req.body);
    
    db.exec(` INSERT INTO users (name,username,password,age)  VALUES(${name},${username},${password},${age})`)

    if (Error) {
        console.log(Error);
        return res.status(400).json({message:"failed"})  
     }
 
     res.status(200).json({message:"user added successfully"}) 
    

})

app.post('/addproject',(req,res)=>{
    const {name,owner}=req.body
    db.run(`INSERT INTO project (name,owner)    VALUES(${name}, ${owner} ) `)
    
    if (Error) {
        console.log(Error);
        return res.status(400).json({message:"failed"})  
     }
    res.status(200).json({message:"added project sucessfuly"})
})

app.listen(PORT,(req,res)=>{
    console.log(`app running on localhost:${PORT} `);
    
})