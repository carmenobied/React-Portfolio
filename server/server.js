// Dependencies
// =============================================================
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const portfolioRouter = require('./routes/portfolio-router')

// Sets up the Express App
// =============================================================
const app = express()
const PORT = 3000

// set up the Express app to handle data parsing
// =============================================================
// define middleware here
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

// API routes
// =============================================================
app.use('/', portfolioRouter)

app.get('/', (req, res) => {
    res.send('Welcome to my Portfolio Website!')
})

app.get('*', (req, res) => {
    const rootHtmlPath = path.resolve(__dirname, '..', 'public', 'index.html');
    res.sendFile(rootHtmlPath);
  })

// Connect to the Mongo DB
// =============================================================

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// Start the API server
// =============================================================
app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });


// const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors')

// const db = require('./db')

// const app = express()
// const apiPort = 3000

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(cors())
// app.use(bodyParser.json())

// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))


// const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors')

// const db = require('./db')

// const app = express()
// const apiPort = 3000

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(cors())
// app.use(bodyParser.json())

// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))