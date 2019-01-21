const express = require('express')()
const path = require('path')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 3000
const app = next({
  dir: '.',
  dev,
})
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    express.get('/sw.js', (req, res) => {
      app.serveStatic(req, res, path.join(__dirname, '.next/sw.js'))
    })

    express.get('/precache-manifest.*', (req, res) => {
      app.serveStatic(req, res, path.join(__dirname, `.next/${req.url}`))
    })

    express.get('/australia', (req, res) => {
      const page = '/country'
      const queryParams = {
        country: req.params.c,
      }
      app.render(req, res, page, queryParams)
    })

    express.get('/:country/:destination', (req, res) => {
      const page = '/destination'
      const { destination, country } = req.params
      app.render(req, res, page, {
        c: country, d: destination,
      })
    })

    express.get('*', (req, res) => handle(req, res))

    express.listen(PORT, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
