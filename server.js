const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// API calls
app.get('/api/hello', (req, res) => {
  console.log('HELLO')
  res.send({ response: 'CV - Nigel Crowther' })
})

if (process.env.NODE_ENV === 'production') {
  // Serve any static files

  // For dev
  // app.use(express.static(path.join(__dirname, 'client/build')));

  // For prod
  app.use(express.static(`${__dirname}/ui-react/build`))

  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    // res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    res.sendFile(path.join(__dirname, 'ui-react/build', 'index.html'))
  })
}

app.listen(port, () => console.log(`Listening on port ${port}`))
