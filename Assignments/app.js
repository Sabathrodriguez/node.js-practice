const http = require('http');

const routes = require('./routing.js');

const server = http.createServer(routes);

server.listen(3000);