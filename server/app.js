const express = require('express');


const userRoute = require('./src/routes/user.route');
const authRoute = require('./src/routes/auth.route');

const app = express()

app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next()

})

app.use(express.json())
    .use(express.urlencoded({ extended: true }))

app.use('/api/user', userRoute)
    .use('/api/auth', authRoute)

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to GPEC App' })
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

module.exports = app;

