const express = require('express')
const app = express()
const bodyParser =require('body-parser') 


app.use(express.static('public'));
app.use(express.static('views'));

/*---------------------- probando express para llenar el body request ---------------------*/

// app.use(express.json())
// app.use(express.urlencoded({extended:true}))

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:true}))


app.get('/', (req,res)=>{
     
    res.sendFile( __dirname + '/views/index.html')

})

// app.post('/registrer',(req,res)=>{
//     console.log(req.body)
//     res.sendFile( __dirname + '/views/index.html')
// })

// app.get('*', function (req, res) {
//     res.sendFile(__dirname + '/public/' + req.url)
// })
 
app.get('/newsletter', (req,res)=>{
     
    res.sendFile( __dirname + '/views/newsletter.html')

})
app.get('/registrer', (req,res)=>{
     
    res.sendFile( __dirname + '/views/registrer.html')

})

app.get('/login', (req,res)=>{
     
    res.sendFile( __dirname + '/views/login.html')

})

  
app.listen(3050)