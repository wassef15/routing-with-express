const express = require('express')

const app = express()

date = (req , res , next) => {
    var hours =   new Date().getHours()
    if(hours < 8 && hours > 17){
       return res.sendFile(__dirname + '/public/closed.html')
    }
    next()
}

app.get('/home', date, (req, res) => {
    res.sendFile(__dirname + '/public/home.html')
})

app.get('/services',date, (req, res) => {
  
    {res.sendFile(__dirname + '/public/ourservices.html')}
  

})

app.get('/contact',date, (req, res) => {
   
    {res.sendFile(__dirname + '/public/contact.html')}
   

})


app.listen(3000, (err) => {
    if (err)
        console.log("not running")
    else
        console.log(" running")


})

// var currentdate = new Date().toLocaleTimeString();
// var datetime =   ( currentdate.getHours() + ":"+ currentdate.getMinutes()+ ":"+ currentdate.getSeconds() );

// console.log(currentdate);