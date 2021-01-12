const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const routes = require('./routes')
const app = express()
const port = 3000

// add handlebars template and start using template
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// setting static-files, body-parser, routes
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)

// start listening Express server
app.listen(port, () => { console.log(`The server is listening on http://localhost:${port}`) })

// start conneting with database
require('./config/mongoose')
