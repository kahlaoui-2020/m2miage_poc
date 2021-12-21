
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();


const userRoute = require('./src/routes/user.route');
const authRoute = require('./src/routes/auth.route');

app.use(express.static(__dirname))
 .use(bodyParser.urlencoded({extended: true}))
 .use(bodyParser.json())

 app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    //res.setHeader('Access-Control-Allow-Credentials', true);
    next()
})

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to GPEC App' })
})

app.use('/api/user', userRoute)
app.use('/api/auth', authRoute)


app.listen(3001, () => {
    console.log(`Server is running on port 3001`)
})


