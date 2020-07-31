const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const Cloudant = require('@cloudant/cloudant')

// Initialize the DB when this module is loaded
var username = '724c8e7f-5faa-49e1-8dc0-7a39ffd871ad-bluemix'
var password = '4b70c44615f871a95e501f5ce871a607072d69e206ad76af5ad020aa7e205f64'
var cloudant = Cloudant({ account: username, password: password })

const cvDbName = 'cvdb'

var cvDb = cloudant.use(cvDbName)

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// API calls
app.get('/api/writeComment', async (req, res) => {
  console.log('Writing comment...' + req.query.name + ':' + req.query.email + ':' + req.query.message)

  // insert the event as a document
  cvDb.insert({
    comment: req.query
  }, function (err, body, header) {
    if (err) {
      return console.log('[cvDb.insert] ', err.message)
    } else {
      console.log('Inserted comment in cv database.')
    }
  })

  res.send({ response: 'ok' })
  // res.send({ response: 'CV - Nigel Crowther' })
})

app.get('/api/getComments', async (req, res) => {
  console.log('Reading comments...')

  cvDb.list({ include_docs: true }, function (err, result) {
    if (err) {
      throw err
    }

    var comments = []
    result.rows.forEach(function (doc) {
      console.log(doc.doc.comment)
      comments.push(doc.doc.comment)
    })
    console.log('Found %d comments', result.rows.length)

    res.send({ response: comments })
  })
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
