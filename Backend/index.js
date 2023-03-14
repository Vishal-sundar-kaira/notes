const connectToMongo=require('./db')
const express = require('express')
connectToMongo();
var cors = require('cors')
const app = express()
const port = 5000
app.use(cors())
app.use(express.json());//middleware is necessary for link respose to perform to perfrom json
//Available routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/farmers',require('./routes/farmers'))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})