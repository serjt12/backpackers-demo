/*const { createServer } = require('http')
const path = require('path')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

const PORT = process.env.PORT || 3000

app.prepare().then(_ => {
  const server = createServer((req, res) => {
    if (req.url === '/sw.js' || req.url.startsWith('/precache-manifest')) {
      app.serveStatic(req, res, path.join(__dirname, '.next', req.url))
    } else {
      handle(req, res)
    }
  })

  const express = require('express')(server)

  express.get('/australia', (req, res) => {
    const page = '/country'
    const { params: { c } } = req
    app.render(req, res, page, { country: c })
  })

  express.get('/:country/:destination', (req, res) => {
    const page = '/destination'
    const { params: { country, destination } } = req
    app.render(req, res, page, { country, destination })
  })

  server.listen(PORT, err => {
    if (err) throw err

    console.log(`> App running on port ${PORT}`)
  })
})*/


const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 3000
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/australia', (req, res) => {
    const page = '/country'
    const queryParams = { country: req.params.c } 
    app.render(req, res, page, queryParams)
  })
  
  server.get('/:country/:destination', (req, res) => {
    const page = '/destination'
    const { destination, country } = req.params
    app.render(req, res, page, { c: country, d: destination })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})