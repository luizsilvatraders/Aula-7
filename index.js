const express = require('express')
const app = express()
const porta = 443

app.get('/contato', function(req,res){
  res.send('contato')
})

app.get('/sobre', function(req,res){
  res.send('sobre')
})

app.get('/', function(req,res){
  res.sendFile(__dirname + '/arquivo.html')
})

app.listen(porta, () => {console.log('servidor rodando') })