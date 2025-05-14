const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/endpoint1') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('hello Test');
    } else if (req.method === 'GET' && req.url === '/index') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Minimal Page</title>
        </head>
        <body>
          <h1>Hello from index page</h1>
          <a href="/products"> Products </a>
          <script src="/index.js"> </script>
        </body>
      </html>
    `);
    }
    else if (req.method === 'GET' && req.url === '/products') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
  <!DOCTYPE html>
  <html>
    <head>
      <title>Minimal Page</title>
    </head>
    <body>
      <h1>Hello from product page</h1>
      <a href="/index"> index </a>
    </body>
  </html>
`);
    }
    else if (req.method === 'GET' && req.url === '/index.js') {
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(`
            console.log("from the server")
            `);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});