const express = require('express')
const app = express()
 
app.use(express.static('public'));
app.use(express.static('views'));

app.get('/', (req,res)=>{
     
    res.sendFile( __dirname + '/views/index.html')

})

// app.get('*', function (req, res) {
//     res.sendFile(__dirname + '/public/' + req.url)
// })
 

app.listen(3050)