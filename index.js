import server from './server';
// Set up port depending on current env (extra tut on this in the future)
const PORT = process.env.NODE_ENV === 'production' ? 80 : 81
// Start listening and log out port that was used
server.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})
