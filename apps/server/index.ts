import http, { IncomingMessage, ServerResponse } from 'http';

(() => {
  const server = http.createServer((request: IncomingMessage, response: ServerResponse) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World\n');
  });

  server.listen(8000);

  console.log('Server running at http://localhost:8000/');
})();
