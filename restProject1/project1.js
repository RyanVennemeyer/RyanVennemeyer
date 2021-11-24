/*
Using insomnia the home directory 
we are able to connect to the 
http://localhost:8080

using POST
http://localhost:8080/Fname
*/
const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())



app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)
/*
this is making the 
http://localhost:8080/name work on the website 
and now that we created it we need to make the 
request and respons objects 
res status means that it works 
while 400 menas that the code broke and 
500 is when the server broke
this is helpful when looking for errors
*/
app.get('/Fname',(req,res) => {
    res.status(200).send({
        Fname: '❤️',
        ethnicity : "foreign"
    })

});

app.post ('/Fname/:id' , (req, res) => {
    const { id } = req.params;
    const { na } = req.body;

    if (!na) {
        res.status(418).send({ message: 'we need a Name!'})
    }
    
    res.send({
        Fname:`Your ❤️ name ${na} and ID of ${id}`,
    });

});