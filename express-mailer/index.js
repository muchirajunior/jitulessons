const express = require('express')
const sendMail = require('./mailer')

const app=express()

const PORT=8000

app.get('/',(req,res)=>{
    res.send({message:"success"})
})

app.get('/sendmail',async (req,res)=>{
    const message={
        from:"muchira junior <john.muchira@thejitu.com>",
        to:"nduati.muchira@s.karu.ac.ke",
        cc:[
            ""
        ],
        subject:"sending email using espress",
        text:"HELLO, this message was sent using express and node-mailer package",
        attachments:[
            {
                filename:"image.jpg",
                path:"./image.jpg",
                cid: 'uniqueID',
            }
        ]
    };

  try {
      var result= await sendMail(message);
      res.send({meesage:"success", result:result})
  } catch (error) {
      res.send({message:"failed"})
  }
})


app.listen(PORT,()=>{
    console.log(`started a development server`);
    console.log(`app running on http://localhost:${PORT}`);
})