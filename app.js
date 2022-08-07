const express=require('express');
const fs=require('fs');
const path=require('path');
const port=8081;
const app=express();
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const { stringify } = require('querystring');
const { toASCII } = require('punycode');


mongoose.connect('mongodb://localhost:27017/gymfeedback');
const feedbackschema= new mongoose.Schema({
firstname: String,
lastname: String,
age: String,
gender: String,
dob: String,
email: String,
address: String
});

const contact= mongoose.model('feedbackform',feedbackschema);



app.use('/static',express.static('static'));
app.use(express.urlencoded());

              

app.get('/',(req,res)=>{
    con='this is the content of the gym site .'
    parameters={title:'GYM LEVITATING',content:con}
    res.status(200).render('index.pug',parameters);
});
app.get('/login',(req,res)=>{
    let params={title:'GYM LEVITATING-LOGIN'}
    res.status(200).render('login.pug',params)
});
app.post('/',(req,res)=>{
    var mydata=new contact(req.body);
    mydata.save().then(()=> {
        parameters={title:'GYM LEVITATING'}
        res.render('index.pug',parameters)
    });
    res.status(200);
});
const registrationschema= new mongoose.Schema({
firstname: String,
lastname: String,
email: String,
password: String,
date: String,
month: String,
year: String,
gender:String
});

const register= mongoose.model('registrationform',registrationschema);
app.post('/login',(req,res)=>{
    var mydata=new register(req.body);
    mydata.save().then(()=> {
        parameters={title:'GYM LEVITATING-LOGIN'}
        res.render('login.pug',parameters)
    });
    res.status(200);
});
app.get('/about',(req,res)=>{
    let params={}
    res.status(200).render('about.pug',params);
})

app.listen(port,()=>{
    console.log("your server is successfully starts at port 80");
});