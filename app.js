
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(express.static('public'))


app.get("/", function(req, res){
    res.sendFile(__dirname + '/index.html');
});


let port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log('Server is running on port 3000');
})