const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello')
})

app.get('/bye', (req, res) => {
  res.send('bye')
})

app.listen(3000, () => {
  console.log('The application is running on port 3000')
})