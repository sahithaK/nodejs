const express = require('express')
const port = 5000;
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.listen(port, () => {
    console.log('app is up on port ' + port)
})