const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const Cloudant = require('@cloudant/cloudant')

// Initialize the DB when this module is loaded
var username = '724c8e7f-5faa-49e1-8dc0-7a39ffd871ad-bluemix'
var password = '4b70c44615f871a95e501f5ce871a607072d69e206ad76af5ad020aa7e205f64'
var cloudant = Cloudant({ account: username, password: password })
const questionsDbName = 'newsviz'

var questionsDb = cloudant.use(questionsDbName)

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var docs = loadQuestions(questionsDb)

// API calls
app.get('/api/load', async (req, res) => {
  console.log('Loading...')
  console.log('Response:' + JSON.stringify(docs))
  res.send({ response: docs })
  // res.send({ response: 'CV - Nigel Crowther' })
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

async function loadQuestions (db) {
  db.find({ selector: { category: 'UK News' } }, function (err, result) {
    if (err) {
      throw err
    }
    console.log('Found %d new questions', result.docs.length)
    for (var i = 0; i < result.docs.length; i++) {
      console.log('  Doc id: %s', result.docs[i]._id)
    }
    docs = result.docs
  })
}

app.listen(port, () => console.log(`Listening on port ${port}`))
