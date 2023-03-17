const path = require('path')
const express = require('express')
const session = require('express-session')

const oneDay = 1000 * 60 * 60 * 24;
const app = express();

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'myMothersKeyValuePair',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true, maxAge: oneDay }
}))


app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//Set static folder
app.use(express.static(path.join(__dirname, 'public')))

const PORT = 4000 || process.env.PORT


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

