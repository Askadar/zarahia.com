// Require (import) and initialise express
const express = require('express');
const server = express()
// Set up port depending on current env (extra tut on this in the future)
const PORT = process.env.NODE_ENV === 'production' ? 80 : 81
// Setting up basic route that will return any static file (basically any file found on server with extension and not normal request like example.com/catalog)
server.use(express.static('public'));
// Start listening and log out port that was used
server.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})
