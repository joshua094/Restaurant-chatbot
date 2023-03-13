const path = require('path')
const express = require('express')
const expressSession = require('express-session')
const getTime = require('./utils/utils')


const app = express();

//Set static folder
app.use(express.static(path.join(__dirname, 'public')))

const PORT = 4000 || process.env.PORT

const botName = 'Order bot'

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

