//This is just basic test

require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  res.send('<h1>Welcome to the page<h1>')
})

app.get('/logout', (req, res) => {
  res.send('<h1>Bye<h1>')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
