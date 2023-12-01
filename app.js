const express = require('express')
const app = express()

app.get('/', (req, res) =>{
    res.json(
        {
            mesg:'Food Ordering - B'
        })
})

app.listen(3000)
