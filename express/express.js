const express=require('express')

const app=express()

const port=5000

app.get('/',(req,res)=>{
    res.status(200).send("hello express")
})

app.get('/junior',(req,res)=>{
    res.status(200).send("<h1>hello muchira junior</h1>")
});

app.get('/jn',(req,res)=>{
    res.status(200).send({name:"muchira junior"})
});


app.listen(port, ()=>{ console.log(` app listening to port ${port}`) }
)