import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <html style={{ background: '#EEE', color: '#444' }}>
        <Head>
          <meta
            name='viewport'
            content='width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui'
          />
          <meta
            http-equiv='Content-Security-Policy'
            content='upgrade-insecure-requests'
          />
          <link rel='manifest' href='static/manifest.json' />
          <link rel='icon' href='static/img/favicon.ico' />
					<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
					<link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet" />
					<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous" />
          {/* <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css' integrity='sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS' crossorigin='anonymous' /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src='https://staticw2.yotpo.com/3L1oF2nFye8y4SexpVc02tJACGjk6wnetqONiyM3/widget.js'/>
          {/* <script src='https://code.jquery.com/jquery-3.3.1.slim.min.js' integrity='sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo' crossorigin='anonymous' /> */}
          {/* <script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js' integrity='sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut' crossorigin='anonymous' /> */}
          {/* <script src='https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js' integrity='sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k' crossorigin='anonymous' /> */}
        </body>
      </html>
    )
  }
}
