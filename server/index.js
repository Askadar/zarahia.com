import { Article } from './model';
import { apiRouter } from './router';

// Require (import) and initialise express
import express from 'express';
const server = express();

// Setting up basic route that will return any static file (basically any file found on server with extension and not normal request like example.com/catalog)
server.use(express.static('public'));

server.use('/api', apiRouter);
export default server;
