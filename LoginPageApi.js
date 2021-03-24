

const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const login_connection = require('./login_connection');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function(req,res){
    res.sendFile(__dirname+"/LoginPage.html");
})

app.post('/submit-form', (req, res) => {
    const E = req.body.Email;
    const P = req.body.Password
    let sql = `INSERT INTO Data (email,passowrd) Values('${E}','${P}')`;
    login_connection.query(sql, function(err,data){
        if(err) throw err;
        res.send(`User data is added: ${JSON.stringify(data)}`)  
    }); 
});

app.get('/getData',(req,res)=>{
    let sql =  'SELECT * FROM Data';
    login_connection.query(sql,function(err,data){
        if (err) throw err;
        res.send(`Data is visible: ${JSON.stringify(data)}`);  
    })
});

app.listen(3000)
